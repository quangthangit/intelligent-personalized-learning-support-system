import { BookOpen, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-cyan-600/90"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full translate-y-24 -translate-x-24"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold">EDUMENTUM</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted by 50,000+ learners</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight">
              Welcome back to your
              <span className="block text-cyan-200">learning journey</span>
            </h1>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
          <p className="text-white/90 italic mb-4">
            Edumentum transformed my career. The courses are incredibly well-structured and the community support is amazing
          </p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"></div>
            <div>
              <p className="font-semibold text-white">Sarah Johnson</p>
              <p className="text-sm text-white/70">Data Scientist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}