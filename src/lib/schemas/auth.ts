import { z } from "zod";

// Login form schema
export const loginSchema = z.object({
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: "Invalid email address",
  }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Role schema
export const roleSchema = z.object({
  id: z.number(),
  name: z.string(),
});

// API Response schemas
export const userSchema = z.object({
  userId: z.number(),
  username: z.string(),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: "Invalid email address",
  }),
  roles: z.array(roleSchema),
  isActive: z.boolean(),
  bannerUrl: z.string().nullable(),
  imageUrl: z.string().nullable(),
});

export const authResponseSchema = z.object({
  data: z.object({
    accessToken: z.string(),
    user: userSchema,
    refreshToken: z.string(),
  }),
  message: z.string(),
  status: z.string(),
});

export type AuthResponse = z.infer<typeof authResponseSchema>;
export type User = z.infer<typeof userSchema>;