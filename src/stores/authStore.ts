// stores/authStore.ts
import { create } from "zustand";
import { User } from "../lib/schemas/auth";

interface AuthState {
  user: User | null;
  loading: boolean;
  error?: string | null;

  login: (email: string, password: string) => Promise<void>;
  register: (data: { username: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
  updateUser: (updated: Partial<User>) => void;
  refreshToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Login failed");
      }

      const data = await res.json();

      set({ user: data.user, loading: false, error: null });
      localStorage.setItem("user", JSON.stringify(data.user));

    } catch (error) {
      set({ error: error instanceof Error ? error.message : "An unknown error occurred", loading: false });
    }
  },


  register: async () => {

  },

  logout: () => {

  },

  updateUser: (updated: Partial<User>) => {

  },

  refreshToken: async () => {

  },

}));
