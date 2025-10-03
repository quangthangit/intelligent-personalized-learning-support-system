"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/lib/schemas/auth";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export function LoginForm() {
  const t = useTranslations("Login");
  const router = useRouter();
  const { login, loading, error } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      toast.success(t("loginSuccess") || "Login successful");
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error);
      toast.error(t("loginError") || "Login failed");
    }
  };

  const isLoading = loading || isSubmitting;

  return (
    <Card className="border-0 shadow-2xl bg-white/50 backdrop-blur-sm dark:bg-gray-950/50">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          {t("title")}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {t("description")}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Global Error */}
          {(error || errors.root) && (
            <Alert
              variant="destructive"
              className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/50"
            >
              <AlertDescription>
                {error || errors.root?.message}
              </AlertDescription>
            </Alert>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              {t("email")}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              disabled={isLoading}
              className={`h-12 border-gray-200 dark:border-gray-700 focus:border-teal-500 focus:ring-teal-500 ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-gray-700 dark:text-gray-300 font-medium"
              >
                {t("password")}
              </Label>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                disabled={isLoading}
                className={`h-12 pr-12 border-gray-200 dark:border-gray-700 focus:border-teal-500 focus:ring-teal-500 ${
                  errors.password
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : ""
                }`}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("loginButton")}
              </div>
            ) : (
              t("title")
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
