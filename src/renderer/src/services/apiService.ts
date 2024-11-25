import { axiosInstance } from './axiosConfig';
import {
  ApiResponse,
  Product,
  ApiFilters,
  CreateProductData,
  LoginData,
  RegisterData,
  AuthResponse,
  AllStock,
  Sale,
  CreateSaleData,
  Customer,
  CreateCustomerData,
  AllSales,
  AllCustomers,
} from '../types/api.types';

export const apiService = {
  // Auth endpoints (unprotected)
  async login(data: LoginData): Promise<ApiResponse<AuthResponse>> {
    const response = await axiosInstance.post<any, ApiResponse<AuthResponse>>('/auth/login', data);
    if (!response.error && response.accessToken) {
      localStorage.setItem('accessToken', response.accessToken);
    }
    return response;
  },

  async register(data: RegisterData): Promise<ApiResponse<AuthResponse>> {
    const response = await axiosInstance.post<any, ApiResponse<AuthResponse>>('/auth/register', data);
    if (!response.error && response.accessToken) {
      localStorage.setItem('accessToken', response.accessToken);
    }
    return response;
  },

  async logout(): Promise<void> {
    localStorage.removeItem('accessToken');
  },

  // dashboard
  async getDashboardData(): Promise<ApiResponse<any>> {
    return await axiosInstance.get('/dashboard');
  },

  // Products
  async getProducts(filters?: ApiFilters): Promise<ApiResponse<Product>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, String(value));
        }
      });
    }
    return await axiosInstance.get('/product', { params });
  },

  async getProductById(id: string): Promise<ApiResponse<Product>> {
    return await axiosInstance.get(`/product/one/${id}`);
  },

  async createProduct(productData: CreateProductData): Promise<ApiResponse<Product>> {
    return await axiosInstance.post('/product', productData);
  },

  async updateProduct(
    id: string,
    productData: Partial<CreateProductData>
  ): Promise<ApiResponse<Product>> {
    return await axiosInstance.patch(`/product/one/${id}`, productData);
  },

  async deleteProduct(id: string): Promise<ApiResponse<null>> {
    return await axiosInstance.delete(`/product/one/${id}`);
  },

  async getStockHistory(filters?: ApiFilters): Promise<ApiResponse<AllStock>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, String(value));
        }
      });
    }
    return await axiosInstance.get('/product/history', { params });
  },

  // Sales
  async getSales(filters?: ApiFilters): Promise<ApiResponse<AllSales>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, String(value));
        }
      });
    }
    return await axiosInstance.get('/sales', { params });
  },

  async getOutstandingSales(filters?: ApiFilters): Promise<ApiResponse<AllSales>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, String(value));
        }
      });
    }
    return await axiosInstance.get('/sales/outstanding', { params });
  },

  async getSaleById(id: string): Promise<ApiResponse<Sale>> {
    return await axiosInstance.get(`/sales/one/${id}`);
  },

  async createSale(saleData: CreateSaleData): Promise<ApiResponse<Sale>> {
    return await axiosInstance.post('/sales', saleData);
  },

  async updateSale(id: string, saleData: Partial<CreateSaleData>): Promise<ApiResponse<Sale>> {
    return await axiosInstance.patch(`/sales/one/${id}`, saleData);
  },

  async deleteSale(id: string): Promise<ApiResponse<null>> {
    return await axiosInstance.delete(`/sales/one/${id}`);
  },

  // Customers
  async getCustomers(filters?: ApiFilters): Promise<ApiResponse<AllCustomers>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, String(value));
        }
      });
    }
    return await axiosInstance.get('/customer', { params });
  },

  async getCustomerById(id: string): Promise<ApiResponse<Customer>> {
    return await axiosInstance.get(`/customer/one/${id}`);
  },

  async createCustomer(customerData: CreateCustomerData): Promise<ApiResponse<Customer>> {
    return await axiosInstance.post('/customer', customerData);
  },

  async updateCustomer(id: string, customerData: Partial<CreateCustomerData>): Promise<ApiResponse<Customer>> {
    return await axiosInstance.patch(`/customer/one/${id}`, customerData);
  },

  async deleteCustomer(id: string): Promise<ApiResponse<null>> {
    return await axiosInstance.delete(`/customer/one/${id}`);
  },


};