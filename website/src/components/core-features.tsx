"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import coreImage from "@/public/images/Group 33.png"

import Image from "next/image";

export default function CoreFeatures() {
  return (
    <section className="flex border-y items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-radial from-[#E9826033] via-transparent to-transparent opacity-20" />

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="bg-foreground mb-4 border border-[#FFFFFF14] w-fit mx-auto rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm [box-shadow:0px_-3px_2.6px_1px_#C7C7C729_inset,0px_-4px_24.4px_-14px_#E98260_inset] text-[#F4CDC2]">
          Core Features
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium leading-tight sm:leading-[1.2] md:leading-[68px] text-center tracking-tight underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent">
            <span className="block lg:inline">Build, Ship, and Scale</span>
            <br className="hidden lg:block" />
            <span className="block lg:inline">with Complete Confidence</span>
          </h2>
          <p className="text-sm px-4 sm:px-0 max-w-[280px] sm:max-w-xl md:max-w-2xl mx-auto font-normal leading-relaxed sm:leading-[20px] text-center underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent">
            Unlock seamless development with private networking,
            <br className="hidden sm:block" />
            automated workflows, and managed services in one platform.
          </p>
          <Button
            className="bg-transparent border-[1px] hover:bg-muted rounded-xl px-3 text-sm sm:text-base"
            variant="gradient"
            size="lg"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Image 
            src={coreImage} 
            alt="Core features illustration"
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] h-auto"
            priority
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
