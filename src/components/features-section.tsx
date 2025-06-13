import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Bell, BarChart2, Calendar, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Home,
      title: "Household Management",
      description: "Create a digital household and invite roommates using a unique code",
    },
    {
      icon: CheckCircle,
      title: "Chore Assignment",
      description: "Easily assign chores to specific household members and track completion",
    },
    {
      icon: Bell,
      title: "Automated Reminders",
      description: "Receive notifications when chores are due to be completed",
    },
    {
      icon: BarChart2,
      title: "Statistics & History",
      description: "View statistics on who has completed which chores and when",
    },
    {
      icon: Calendar,
      title: "Custom Schedules",
      description: "Set up recurring chores with flexible frequencies",
    },
    {
      icon: Users,
      title: "Conflict Resolution",
      description: "Clear accountability to minimize roommate tensions",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#e8e6e1] px-3 py-1 text-sm text-[#5b6db5]">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#5b6db5] md:text-4xl/tight">
              Everything You Need for a Clean Home
            </h2>
            <p className="max-w-[900px] text-[#6e7a9a] md:text-xl">
              CleanSlate provides all the tools you need to keep your shared student home clean and organized.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-[#5b6db5]/50 transition-all hover:shadow-md bg-white">
              <CardHeader className="space-y-1 flex flex-row items-start gap-4">
                <div className="mt-1 bg-[#e8e6e1] p-2 rounded-lg">
                  <feature.icon className="h-6 w-6 text-[#5b6db5]" />
                </div>
                <div>
                  <CardTitle className="text-[#5b6db5]">{feature.title}</CardTitle>
                  <CardDescription className="text-[#6e7a9a]">{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
