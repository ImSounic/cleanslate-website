import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FAQSection() {
  const faqs = [
    {
      question: "Is CleanSlate free to use?",
      answer:
        "Yes! CleanSlate is completely free for student households. We offer premium features for a small monthly fee, but all core functionality is available in the free version.",
    },
    {
      question: "How many roommates can I add to my household?",
      answer:
        "You can add up to 8 roommates to a single household in the free version, which covers most student living situations.",
    },
    {
      question: "Is CleanSlate available on both iOS and Android?",
      answer:
        "Yes! CleanSlate is available for both iOS and Android devices. We also have a web version that can be accessed from any browser.",
    },
    {
      question: "What if my roommate doesn't want to use the app?",
      answer:
        "CleanSlate works best when everyone participates, but you can still use it even if not all roommates join. You can manage chores for those who are using it, and perhaps the clear organization will convince others to join!",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#e8e6e1] px-3 py-1 text-sm text-[#5b6db5]">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#5b6db5] md:text-4xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-[#6e7a9a] md:text-xl">Everything you need to know about CleanSlate</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 mt-8">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-2 bg-white">
              <CardHeader>
                <CardTitle className="text-[#5b6db5]">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent className="text-[#6e7a9a]">{faq.answer}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
