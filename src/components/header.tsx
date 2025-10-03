import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LocalizedLink } from "./localized-link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
              <span className="text-lg font-bold text-white">E</span>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              EDUMENTUM
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["Courses", "Programs", "Community", "Resources", "Pricing"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-teal-600 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex gap-2 hover:bg-teal-50 hover:text-teal-600"
              >
                EN
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notification */}
          <ThemeToggle />

          {/* User */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex hover:bg-teal-50 hover:text-teal-600"
          >
            <User className="h-5 w-5" />
          </Button>

          {/* Login */}
          <LocalizedLink href="/login">
            <Button
              variant="ghost"
              className="hidden sm:flex hover:bg-teal-50 hover:text-teal-600"
            >
              Log in
            </Button>
          </LocalizedLink>
          <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
