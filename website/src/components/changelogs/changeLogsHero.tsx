"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ChangeLogaHero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Initial animation after mount
    setAnimate(true);

    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000); // Beam duration
    }, 3000); // Trigger every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">

      <div className="absolute right-[-2px] top-0 z-0 w-[40%]">
        <svg
          viewBox="0 0 456 661"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 172.204L160.669 1L455 315.905V659L1 172.204Z"
            fill="url(#paint0_linear_8816_516)"
            fillOpacity="0.3"
            stroke="url(#paint1_linear_8816_516)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8816_516"
              x1="228"
              y1="1"
              x2="228"
              y2="659"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" />
              <stop offset="1" stopColor="#212121" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8816_516"
              x1="506.37"
              y1="549.876"
              x2="15.4494"
              y2="102.245"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0769944" stopColor="#212121" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient
              id="paint2_linear"
              x1="160"
              y1="0"
              x2="450"
              y2="315"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DB5F39" />
              <stop offset="1" stopColor="#212121" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M160 0.0L160 1L455 315"
            fill="none"
            stroke="url(#paint2_linear)"
            strokeWidth="1"
            className={`transition-all duration-1000 ${
              animate ? "stroke-dashoffset-0" : "stroke-dashoffset-300"
            }`}
            strokeDasharray="300"
            strokeDashoffset="300"
          />
        </svg>
      </div>
      <div className="absolute left-[-2px] top-0 z-0 w-[40%]">
        <svg
          viewBox="0 0 457 661"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M456 0.0L295.979 1L1 315.905V659L456 172.204Z"
            fill="url(#paint0_linear_8816_515)"
            fillOpacity="0.3"
            stroke="url(#paint1_linear_8816_515)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8816_515"
              x1="228.5"
              y1="1"
              x2="228.5"
              y2="659"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" />
              <stop offset="1" stopColor="#212121" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8816_515"
              x1="-50.4835"
              y1="549.876"
              x2="440.536"
              y2="101.169"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0769944" stopColor="#212121" />
              <stop offset="1" stopColor="#333333" stopOpacity="0" />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient
              id="paint2_linear"
              x1="160"
              y1="0"
              x2="450"
              y2="315"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DB5F39" />
              <stop offset="1" stopColor="#212121" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M295 0.204L295 1L1 315"
            fill="none"
            stroke="url(#paint2_linear)"
            strokeWidth="1"
            className={`transition-all duration-1000 ${
              animate ? "stroke-dashoffset-0" : "stroke-dashoffset-300"
            }`}
            strokeDasharray="300"
            strokeDashoffset="300"
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mx-auto max-w-[760px] space-y-4 md:space-y-6 text-center z-20 w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-foreground border border-[#FFFFFF14] text-white w-fit mx-auto rounded-full px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm [box-shadow:0px_-3px_2.6px_1px_#C7C7C729_inset,0px_-4px_24.4px_-14px_#E98260_inset]"
        >
          Product Updates
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[32px] md:text-[54px] font-medium leading-[1.2] md:leading-[68px] text-center tracking-tight underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent px-4"
        >
          Latest Updates
          <br />
          And Feature Releases{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-sm md:text-sm mx-auto md:text-lg font-normal leading-5 md:leading-6 tracking-[-0.015em] text-center underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent px-4 max-w-[280px] md:max-w-none"
        >
          Stay up to date with our latest features, improvements, and security updates. 
          Track our product evolution and see what's new in each release.
        </motion.p>

      </motion.div>
    </section>
  );
}
