import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Virenet?",
    answer:
      "Virenet is a modern platform designed to simplify and secure the process of publishing backend applications. We provide developers with automated deployment pipelines, containerization support, and robust security measures to ensure smooth and safe application publishing.",
  },
  {
    question: "Which programming languages and frameworks does Virenet support?",
    answer:
      "Virenet supports a wide range of programming languages and frameworks including Node.js, Python, Ruby, Java, and Go. Our platform is designed to be language-agnostic and can accommodate most modern web frameworks.",
  },
  {
    question: "How does the deployment process work?",
    answer:
      "The deployment process is automated and straightforward. Simply connect your repository, configure your deployment settings, and Virenet handles the rest - from building and testing to deployment and monitoring.",
  },
  {
    question: "How does the deployment process work?",
    answer:
      "Our deployment process is designed to be simple yet powerful. It includes automatic builds, continuous integration, and seamless rollback capabilities if needed.",
  },
  {
    question: "How does the deployment process work?",
    answer:
      "The deployment process involves several automated steps including code verification, testing, building, and final deployment to your chosen environment.",
  },
  {
    question: "What security features are included?",
    answer:
      "We provide comprehensive security features including SSL/TLS encryption, automated security patches, DDoS protection, and regular security audits to ensure your applications remain secure.",
  },
]

export default function FAQSection() {
  return (
    <section className="mx-0 border-y md:mx-36 border-x border-1 border-[#ffffff14]">
      <div className="w-full text-tx-primary py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-6 sm:mb-8 md:mb-12">
            Frequently Asked <br className="sm:hidden" /> Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-zinc-800 px-0"
                >
                  <AccordionTrigger 
                    className="text-base sm:text-lg font-normal hover:no-underline hover:text-zinc-400 
                      [&[data-state=open]>div]:text-white px-4 sm:px-6"
                  >
                    <div className="text-left pr-8">{faq.question}</div>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="text-sm sm:text-base text-zinc-400 px-4 sm:px-6"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

