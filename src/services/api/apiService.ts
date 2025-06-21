import { toastError } from "@/components/CustomToast/utils";
import { QueryClient } from "@tanstack/react-query";
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  AxiosError,
} from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DEFAULT_HEADERS: Record<string, string> = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export interface ApiError {
  message: string;
  statusCode?: number;
  data?: unknown;
}

export class ApiService {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: DEFAULT_HEADERS,
      timeout: 10000,
      ...config,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token && config.headers) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<unknown>) => {
        this.handleError(error);
        return Promise.reject(this.normalizeError(error));
      }
    );
  }

  private getToken(): string | null {
    return localStorage.getItem("token");
  }

  private normalizeError(error: AxiosError<unknown>): ApiError {
    if (error.response) {
      const message =
        typeof error.response.data === "object" &&
        error.response.data !== null &&
        "message" in error.response.data
          ? (error.response.data as { message?: string }).message ||
            error.message
          : error.message;

      return {
        message,
        statusCode: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      return {
        message: "No response received from server",
      };
    } else {
      return {
        message: error.message,
      };
    }
  }

  private handleError(error: AxiosError<unknown>): void {
    const normalizedError = this.normalizeError(error);
    
    let errMsg = normalizedError.message;

    if (normalizedError.statusCode === 401) {
      errMsg = "Unauthorized – redirecting or logging out";
    }
    toastError(errMsg);
  }

  public async get<TResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await this.instance.get<TResponse>(url, config);
    return response.data;
  }

  public async post<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await this.instance.post<TResponse>(url, data, config);
    return response.data;
  }

  public async put<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await this.instance.put<TResponse>(url, data, config);
    return response.data;
  }

  public async patch<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await this.instance.patch<TResponse>(url, data, config);
    return response.data;
  }

  public async delete<TResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await this.instance.delete<TResponse>(url, config);
    return response.data;
  }

  public setHeader(key: string, value: string): void {
    this.instance.defaults.headers.common[key] = value;
  }

  public removeHeader(key: string): void {
    delete this.instance.defaults.headers.common[key];
  }
}

export const apiService = new ApiService();

// Query client setup
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        if (
          (error as ApiError)?.statusCode &&
          (error as ApiError).statusCode! >= 400 &&
          (error as ApiError).statusCode! < 500
        ) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});
