import Image from "next/image"

export function AppPreviewSection() {
  const screenshots = [
    {
      src: "/images/home-screen.png",
      alt: "CleanSlate home screen",
    },
    {
      src: "/images/schedule-screen.png",
      alt: "CleanSlate schedule screen",
    },
    {
      src: "/images/members-screen.png",
      alt: "CleanSlate members screen",
    },
  ]

  return (
    <section id="app-preview" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#e8e6e1] px-3 py-1 text-sm text-[#5b6db5]">App Preview</div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#5b6db5] md:text-4xl/tight">
              See CleanSlate in Action
            </h2>
            <p className="max-w-[900px] text-[#6e7a9a] md:text-xl">
              Take a look at how CleanSlate helps you manage household chores
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative w-[250px] h-[500px]">
                <div className="absolute inset-0 bg-[#5b6db5] rounded-[30px] blur-lg opacity-10"></div>
                <div className="relative h-full w-full rounded-[30px] border-2 border-[#e8e6e1] bg-white shadow-lg overflow-hidden">
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    width={250}
                    height={500}
                    alt={screenshot.alt}
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
