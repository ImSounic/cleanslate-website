import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#f7f5f0]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f7f5f0]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-[#5b6db5]" />
          <span className="text-xl font-bold text-[#5b6db5]">CleanSlate</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium text-[#5b6db5] hover:text-[#4a5ca0] transition-colors">
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-[#5b6db5] hover:text-[#4a5ca0] transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#app-preview"
            className="text-sm font-medium text-[#5b6db5] hover:text-[#4a5ca0] transition-colors"
          >
            App Preview
          </Link>
          <Link href="#faq" className="text-sm font-medium text-[#5b6db5] hover:text-[#4a5ca0] transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button size="sm" className="bg-[#5b6db5] hover:bg-[#4a5ca0]">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
