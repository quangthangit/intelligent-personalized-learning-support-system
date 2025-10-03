import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl";

export function SocialLogin() {
  const t = useTranslations("Login");
  return (
    <div className="space-y-6">
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-gray-950 px-4 py-1 text-gray-500 dark:text-gray-400 font-medium rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            {t("orContinueWith")}
          </span>
        </div>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4">
        {/* Google Button */}
        <Button 
          variant="outline" 
          type="button"
          className="h-12 relative group border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 dark:hover:from-red-950/20 dark:hover:to-blue-950/20 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
        >
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg className="mr-2 h-5 w-5 relative z-10" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="font-medium relative z-10">Google</span>
        </Button>

        {/* GitHub Button */}
        <Button 
          variant="outline" 
          type="button"
          className="h-12 relative group border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-900 dark:hover:to-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
        >
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-gray-500/5 to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg className="mr-2 h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="font-medium relative z-10">GitHub</span>
        </Button>
      </div>

      {/* Additional Social Options */}
      <div className="grid grid-cols-3 gap-3">
        <Button
          variant="outline"
          size="sm"
          className="h-10 px-3 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-400 transition-all duration-200 group"
        >
          <svg className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="h-10 px-3 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
        >
          <svg className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="h-10 px-3 border-sky-200 dark:border-sky-800 hover:bg-sky-50 dark:hover:bg-sky-950/20 hover:border-sky-400 transition-all duration-200 group"
        >
          <svg className="h-4 w-4 text-sky-500 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </Button>
      </div>

      {/* Security Notice */}
      <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border border-teal-100 dark:border-teal-800">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-teal-500 rounded-full animate-pulse"></div>
          <p className="text-xs text-teal-700 dark:text-teal-300 font-medium">
            {t("securityNotice")}
          </p>
        </div>
      </div>
    </div>
  )
}