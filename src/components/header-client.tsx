"use client"

import { Bell, Crown, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function HeaderClient() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-19 items-center justify-between px-6">
        {/* Left side - Sidebar toggle and Page title */}
        <div className="flex items-center gap-3">
          <SidebarTrigger />

          <h1 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Dashboard
          </h1>
        </div>

        {/* Right side - Actions and user menu */}
        <div className="flex items-center gap-2">
          {/* Upgrade Button with Effects */}
          <Button
            size="sm"
            className="
              relative overflow-hidden
              bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 
              hover:from-orange-500 hover:via-orange-600 hover:to-orange-700
              text-white shadow-lg hover:shadow-xl
              transition-all duration-300 ease-out
              transform hover:scale-105 active:scale-95
              border-0
              before:absolute before:inset-0 
              before:bg-gradient-to-r before:from-yellow-400/20 before:to-red-400/20
              before:opacity-0 hover:before:opacity-100
              before:transition-opacity before:duration-300
              after:absolute after:top-0 after:left-[-100%] 
              after:w-full after:h-full 
              after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
              hover:after:left-[100%] after:transition-all after:duration-700
              gap-2
            "
          >
            <Crown className="h-4 w-4 relative z-10 animate-pulse" />
            <span className="relative z-10 font-semibold">Upgrade</span>
            
            {/* Sparkle Effect */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-150"></div>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Notifications */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="relative h-9 w-9 hover:bg-accent transition-colors">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
              {/* Notification badge */}
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 hover:bg-red-500 text-white text-xs border-2 border-background animate-bounce">
                1
              </Badge>
            </Button>
          </div>

          {/* Language/Region */}
          <div className="hidden md:flex items-center px-3 py-1.5 rounded-md bg-accent/50 hover:bg-accent transition-colors">
            <span className="text-sm font-medium">US</span>
          </div>

          {/* User Avatar with Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full hover:ring-2 hover:ring-ring hover:ring-offset-2 transition-all"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground mt-1">john@example.com</p>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Crown className="mr-2 h-4 w-4 text-orange-500" />
                <span>Upgrade to Pro</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
