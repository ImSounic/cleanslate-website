import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5b6db5] text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready for a Cleaner, Drama-Free Home?
            </h2>
            <p className="max-w-[600px] text-[#d9d7d2] md:text-xl mx-auto">
              Join thousands of students who have transformed their shared living experience with CleanSlate.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-white hover:bg-gray-100 text-black flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="black">
                <path d="M17.9 5c.1 1.1-.3 2.2-1 3.1-.7.9-1.8 1.4-3 1.4-.1-1.1.3-2.2 1-3.1.7-.9 1.8-1.4 3-1.4zM14.5 10.4c1.7 0 2.4 1.2 4.5 1.2 2.1 0 2.8-1.2 4.5-1.2 1.2 0 2.4.5 3.2 1.3-2.7 1.5-2.3 5.5.5 6.3-.5 1.2-1.1 2.3-1.9 3.3-1.1 1.5-2.3 3-4.1 3-1.7 0-2.2-1-4.2-1-2 0-2.5 1-4.2 1-1.8 0-3.2-1.6-4.3-3.1C5.5 17.7 4.4 12.5 7 9.5c1.3-1.5 3-1.6 4.2-1.2 1.3.4 2.4 1.3 3.3 2.1z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs">Download on the</span>
                <span className="text-sm font-medium">App Store</span>
              </div>
            </Button>
            <Button className="bg-white hover:bg-gray-100 text-black flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="black">
                <path d="M3 20.5v-17c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm17 0v-17H4v17h16zM8.4 5.5l4.6 4.6 4.6-4.6 1.4 1.4-4.6 4.6 4.6 4.6-1.4 1.4-4.6-4.6-4.6 4.6-1.4-1.4 4.6-4.6-4.6-4.6 1.4-1.4z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs">GET IT ON</span>
                <span className="text-sm font-medium">Google Play</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
