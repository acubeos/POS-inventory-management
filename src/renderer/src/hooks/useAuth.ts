import { useState, useCallback } from 'react';
import { apiService } from '../services/apiService';
import { LoginData, RegisterData, AuthResponse } from '../types/api.types';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<AuthResponse | null>(() => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const payload = accessToken ? JSON.parse(atob(accessToken.split('.')[1])) : null;
      return payload || null;
    } catch {
      return null;
    }
  });

  const handleRequest = async <T>(
    request: () => Promise<T>
  ): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      return await request();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const login = useCallback(async (data: LoginData) => {
    const response = await handleRequest(() => apiService.login(data));
    if (response?.data) {
      setUser(response.data);
    }
    return response;
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    const response = await handleRequest(() => apiService.register(data));
    if (!response?.error && response?.data) {
      setUser(response.data);
    }
    return response;
  }, []);

  const logout = useCallback(async () => {
    await apiService.logout();
    setUser(null);
  }, []);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};