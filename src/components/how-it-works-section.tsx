export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Create Your Household",
      description: "Sign up and create a digital household for you and your roommates",
    },
    {
      number: "2",
      title: "Invite Roommates",
      description: "Share your unique household code with roommates to join",
    },
    {
      number: "3",
      title: "Assign & Track Chores",
      description: "Create chores, assign them, and track completion with ease",
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-[#e8e6e1]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#d9d7d2] px-3 py-1 text-sm text-[#5b6db5]">Simple Process</div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#5b6db5] md:text-4xl/tight">
              How CleanSlate Works
            </h2>
            <p className="max-w-[900px] text-[#6e7a9a] md:text-xl">
              Get your household organized in just a few simple steps
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5b6db5] text-white mb-4">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-[#5b6db5]">{step.title}</h3>
              <p className="mt-2 text-[#6e7a9a]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
