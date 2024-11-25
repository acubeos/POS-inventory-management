import { useState, useCallback } from 'react';
import { apiService } from '../services/apiService';
import { ApiFilters, CreateProductData } from '../types/api.types';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const getProducts = useCallback(
    (filters?: ApiFilters) => handleRequest(() => apiService.getProducts(filters)),
    []
  );

  const getProductById = useCallback(
    (id: string) => handleRequest(() => apiService.getProductById(id)),
    []
  );

  const createProduct = useCallback(
    (data: CreateProductData) => handleRequest(() => apiService.createProduct(data)),
    []
  );

  const updateProduct = useCallback(
    (id: string, data: Partial<CreateProductData>) =>
      handleRequest(() => apiService.updateProduct(id, data)),
    []
  );

  const deleteProduct = useCallback(
    (id: string) => handleRequest(() => apiService.deleteProduct(id)),
    []
  );

  const getStockHistory = useCallback(
    () => handleRequest(() => apiService.getStockHistory()),
    []
  );

  return {
    loading,
    error,
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getStockHistory,
  };
};