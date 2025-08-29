import { AppTemplateResponse } from "@/types/appTemplate";

// API Configuration
const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
};

console.log("🔧 API Configuration loaded:", {
  baseUrl: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
});

// Generic API client
class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseUrl: string, defaultHeaders: Record<string, string>) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    console.log(`🌐 Making API request to: ${url}`);
    console.log("📤 Request options:", {
      method: options.method || "GET",
      headers: { ...this.defaultHeaders, ...options.headers },
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        headers: { ...this.defaultHeaders, ...options.headers },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log(`📡 Response status: ${response.status}`);
      console.log(
        `📡 Response headers:`,
        Object.fromEntries(response.headers.entries())
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ API response received:", data);

      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("❌ API request failed:", error);
      throw error;
    }
  }

  // GET request
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET" });
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }
}

// Create API client instance
export const apiClient = new ApiClient(API_CONFIG.baseUrl, API_CONFIG.headers);

// Specific API endpoints
export const appTemplateApi = {
  getAll: () =>
    apiClient.get<AppTemplateResponse>("/AppTemplate/GetAllAppTemplates"),
  getById: (id: string) =>
    apiClient.get<AppTemplateResponse>(`/AppTemplate/GetAppTemplateById/${id}`),
  create: (data: any) =>
    apiClient.post<AppTemplateResponse>("/AppTemplate", data),
  update: (id: string, data: any) =>
    apiClient.put<AppTemplateResponse>(`/AppTemplate/${id}`, data),
  delete: (id: string) =>
    apiClient.delete<AppTemplateResponse>(`/AppTemplate/${id}`),
};
