import { AuthResponse, authResponseSchema, LoginFormData, loginSchema } from "../schemas/auth";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

class AuthAPI {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unexpected error occurred");
    }
  }

  async login(credentials: LoginFormData): Promise<AuthResponse> {
    const validatedData = loginSchema.parse(credentials);

    const response = await this.request<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(validatedData),
    });
    console.log("auth test login", response);
    return authResponseSchema.parse(response);
  }
}

export const authAPI = new AuthAPI();