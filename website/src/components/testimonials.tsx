"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useState } from "react";
import davidChenImage from "@/public/images/User Image.png"
import sarahMartinezImage from "@/public/images/User Image (1).png"
import michaelWongImage from "@/public/images/User Image (2).png"
import emilyParkerImage from "@/public/images/User Image (3).png"
import jamesWilsonImage from "@/public/images/User Image (4).png"
import lisaThompsonImage from "@/public/images/User Image (5).png"
import vector from "@/public/images/Vector.png"
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: any; // veya StaticImageData tipini kullanabilirsiniz
}

const testimonials: Testimonial[] = [
  {
    name: "David Chen",
    role: "CTO at TechStream",
    content:
      "Virenet's cybersecurity solutions gave us complete peace of mind. Their team's expertise in threat detection and rapid incident response helped us.",
    image: davidChenImage
  },
  {
    name: "Sarah Martinez",
    role: "Network Engineer",
    content:
      "We switched to Virenet for network management last year and haven't looked back. Their 24/7 monitoring and quick response.",
    image: sarahMartinezImage
  },
  {
    name: "Michael Wong",
    role: "IT Director",
    content:
      "Virenet's cybersecurity solutions gave us complete peace of mind. Their team's expertise in threat detection and rapid incident response helped us.",
    image: michaelWongImage
  },
  {
    name: "Emily Parker",
    role: "DevOps Lead",
    content:
      "As a fast-growing technology startup, we needed highly scalable security solutions. Virenet delivered exactly that with excellence, plus their customer support has been.",
    image: emilyParkerImage
  },
  {
    name: "James Wilson",
    role: "Security Engineer",
    content:
      "Virenet's proactive and innovative approach to cybersecurity has helped us prevent several potential serious breaches. Their advanced threat intelligence system.",
    image: jamesWilsonImage
  },
  {
    name: "Lisa Thompson",
    role: "IT Operations Manager",
    content:
      "The comprehensive and detailed security assessment Virenet provided gave us clear, actionable insights into our vulnerabilities. Their strategic remediation",
    image: lisaThompsonImage
  },
];

export default function TestimonialsGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex border-y items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
      <div className="w-full max-w-4xl mx-auto ">
        {/* Header Section */}
        <div className="space-y-3">
          <div className="bg-foreground mb-4 border border-[#FFFFFF14] w-fit mx-auto rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm [box-shadow:0px_-3px_2.6px_1px_#C7C7C729_inset,0px_-4px_24.4px_-14px_#E98260_inset] text-[#F4CDC2]">
            Testimonials
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium leading-tight sm:leading-[1.2] md:leading-[68px] text-center tracking-tight underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent">
            <span className="block lg:inline">What Our Clients Say</span>
            <br className="hidden lg:block" />
            <span className="block lg:inline">From Around The World</span>
          </h2>

          <p className="text-sm px-4 sm:px-0 max-w-[280px] sm:max-w-xl md:max-w-2xl mx-auto font-normal leading-relaxed sm:leading-[20px] text-center underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent">
            Short quotes from CTOs, engineers, and developers sharing their
            <br className="hidden sm:block" />
            transformation journeys and technical achievements.
          </p>

          <div className="flex justify-center">
          <Button
            className="bg-transparent border-[1px] hover:bg-muted rounded-xl px-3 text-sm sm:text-base"
            variant="gradient"
            size="lg"
          >
            See More
          </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="bg-[#202020] mt-[72px] p-2 border rounded-[32px]">
          <div className="overflow-hidden rounded-3xl bg-[#202020]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`group relative p-6 transition-colors cursor-pointer
                    ${
                      activeIndex === index
                        ? "bg-[#2A2A2A]"
                        : "hover:bg-[#2A2A2A]"
                    }
                    ${index % 3 !== 2 ? "border-r border-[#333333]" : ""}
                  `}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.image.src}
                          alt={`${testimonial.name}'s avatar`}
                        />

                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className={`absolute -right-1 top-[-60px] transition-opacity duration-200
                        ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
                      >
                        <Image 
                          src={vector} 
                          alt="Quote mark"
                          className="w-4 h-4"
                        />
                      </div>
                      <p
                        className={`relative z-10 transition-colors ${
                          activeIndex === index
                            ? "text-tx-primary"
                            : "text-tx-secondary"
                        }`}
                      >
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
