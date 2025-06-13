import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#e8e6e1] to-[#f7f5f0]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-[#5b6db5] sm:text-5xl xl:text-6xl/none">
                Keep Your Student Home Clean, Without the Drama
              </h1>
              <p className="max-w-[600px] text-[#6e7a9a] md:text-xl">
                CleanSlate helps student households manage chores, track responsibilities, and maintain harmony in
                shared living spaces.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M17.9 5c.1 1.1-.3 2.2-1 3.1-.7.9-1.8 1.4-3 1.4-.1-1.1.3-2.2 1-3.1.7-.9 1.8-1.4 3-1.4zM14.5 10.4c1.7 0 2.4 1.2 4.5 1.2 2.1 0 2.8-1.2 4.5-1.2 1.2 0 2.4.5 3.2 1.3-2.7 1.5-2.3 5.5.5 6.3-.5 1.2-1.1 2.3-1.9 3.3-1.1 1.5-2.3 3-4.1 3-1.7 0-2.2-1-4.2-1-2 0-2.5 1-4.2 1-1.8 0-3.2-1.6-4.3-3.1C5.5 17.7 4.4 12.5 7 9.5c1.3-1.5 3-1.6 4.2-1.2 1.3.4 2.4 1.3 3.3 2.1z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-medium">App Store</span>
                </div>
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M3 20.5v-17c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm17 0v-17H4v17h16zM8.4 5.5l4.6 4.6 4.6-4.6 1.4 1.4-4.6 4.6 4.6 4.6-1.4 1.4-4.6-4.6-4.6 4.6-1.4-1.4 4.6-4.6-4.6-4.6 1.4-1.4z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6e7a9a]">
              <CheckCircle2 className="h-4 w-4 text-[#5b6db5]" />
              <span>No more roommate conflicts over cleaning</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5b6db5] to-[#7a89c2] rounded-[40px] blur-xl opacity-20"></div>
              <div className="relative h-full w-full rounded-[40px] border-2 border-muted bg-background shadow-xl overflow-hidden">
                <Image
                  src="/images/landing-screen.png"
                  width={350}
                  height={700}
                  alt="CleanSlate app screenshot"
                  className="object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
