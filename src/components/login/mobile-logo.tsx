import { BookOpen } from "lucide-react"

export function MobileLogo() {
  return (
    <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600">
        <BookOpen className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
        EDUMENTUM
      </span>
    </div>
  )
}