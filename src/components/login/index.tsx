"use client"

import { CardFooter } from "@/components/ui/card"
import { HeroSection } from "./hero-section"
import { MobileLogo } from "./mobile-logo"
import { LoginForm } from "./login-form"
import { SocialLogin } from "./social-login"
import { FooterLinks } from "./footer-links"

export default function LoginContent() {
  return (
    <div className="min-h-screen flex">
      <HeroSection />

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="w-full max-w-md space-y-8">
          <MobileLogo />
          
          <div className="space-y-0">
            <LoginForm />
            
            <CardFooter className="flex flex-col space-y-6 pt-6">
              <SocialLogin />
            </CardFooter>
          </div>

          <FooterLinks />
        </div>
      </div>
    </div>
  )
}