"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero() {
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
    <section className="flex min-h-[53vh] items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute left-[50%] top-[90%] translate-x-[-50%] translate-y-[-50%] z-10 w-[70%]">
        <svg
          viewBox="0 0 791 686"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4" filter="url(#filter0_f_8816_573)">
            <mask id="path-1-inside-1_8816_573" fill="white">
              <path d="M607.529 112.252C610.91 109.408 615.967 109.837 618.715 113.297C649.784 152.414 670.057 199.053 677.431 248.556C685.199 300.698 678.352 353.973 657.652 402.457C636.951 450.941 603.208 492.732 560.175 523.185C517.142 553.637 466.506 571.557 413.897 574.951C361.289 578.345 308.77 567.081 262.18 542.41C215.591 517.74 176.758 480.63 149.999 435.209C123.24 389.787 109.604 337.833 110.607 285.125C111.56 235.085 125.671 186.228 151.457 143.442C153.737 139.658 158.697 138.583 162.416 140.969L286.04 220.287C289.759 222.673 290.814 227.61 288.676 231.477C279.081 248.837 273.839 268.313 273.46 288.225C273.03 310.809 278.872 333.069 290.338 352.531C301.803 371.993 318.442 387.894 338.404 398.464C358.367 409.035 380.869 413.861 403.411 412.407C425.952 410.953 447.648 403.275 466.086 390.227C484.525 377.179 498.982 359.272 507.852 338.498C516.722 317.724 519.656 294.898 516.327 272.556C513.393 252.858 505.692 234.217 493.945 218.234C491.328 214.674 491.74 209.642 495.122 206.798L607.529 112.252Z" />
            </mask>
            <path
              d="M607.529 112.252C610.91 109.408 615.967 109.837 618.715 113.297C649.784 152.414 670.057 199.053 677.431 248.556C685.199 300.698 678.352 353.973 657.652 402.457C636.951 450.941 603.208 492.732 560.175 523.185C517.142 553.637 466.506 571.557 413.897 574.951C361.289 578.345 308.77 567.081 262.18 542.41C215.591 517.74 176.758 480.63 149.999 435.209C123.24 389.787 109.604 337.833 110.607 285.125C111.56 235.085 125.671 186.228 151.457 143.442C153.737 139.658 158.697 138.583 162.416 140.969L286.04 220.287C289.759 222.673 290.814 227.61 288.676 231.477C279.081 248.837 273.839 268.313 273.46 288.225C273.03 310.809 278.872 333.069 290.338 352.531C301.803 371.993 318.442 387.894 338.404 398.464C358.367 409.035 380.869 413.861 403.411 412.407C425.952 410.953 447.648 403.275 466.086 390.227C484.525 377.179 498.982 359.272 507.852 338.498C516.722 317.724 519.656 294.898 516.327 272.556C513.393 252.858 505.692 234.217 493.945 218.234C491.328 214.674 491.74 209.642 495.122 206.798L607.529 112.252Z"
              fill="#DB5F39"
              fillOpacity="0.4"
            />
            <path
              d="M607.529 112.252C610.91 109.408 615.967 109.837 618.715 113.297C649.784 152.414 670.057 199.053 677.431 248.556C685.199 300.698 678.352 353.973 657.652 402.457C636.951 450.941 603.208 492.732 560.175 523.185C517.142 553.637 466.506 571.557 413.897 574.951C361.289 578.345 308.77 567.081 262.18 542.41C215.591 517.74 176.758 480.63 149.999 435.209C123.24 389.787 109.604 337.833 110.607 285.125C111.56 235.085 125.671 186.228 151.457 143.442C153.737 139.658 158.697 138.583 162.416 140.969L286.04 220.287C289.759 222.673 290.814 227.61 288.676 231.477C279.081 248.837 273.839 268.313 273.46 288.225C273.03 310.809 278.872 333.069 290.338 352.531C301.803 371.993 318.442 387.894 338.404 398.464C358.367 409.035 380.869 413.861 403.411 412.407C425.952 410.953 447.648 403.275 466.086 390.227C484.525 377.179 498.982 359.272 507.852 338.498C516.722 317.724 519.656 294.898 516.327 272.556C513.393 252.858 505.692 234.217 493.945 218.234C491.328 214.674 491.74 209.642 495.122 206.798L607.529 112.252Z"
              stroke="#E9E9E9"
              strokeOpacity="0.08"
              strokeWidth="2"
              mask="url(#path-1-inside-1_8816_573)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_8816_573"
              x="0.554688"
              y="0.378418"
              width="789.988"
              height="685.164"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="55"
                result="effect1_foregroundBlur_8816_573"
              />
            </filter>
          </defs>
        </svg>
      </div>
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
          className="bg-foreground text-tx-primary border border-[#FFFFFF14] w-fit mx-auto rounded-full px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm [box-shadow:0px_-3px_2.6px_1px_#C7C7C729_inset,0px_-4px_24.4px_-14px_#E98260_inset]"
        >
          Building the future of cloud infrastructure
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[32px] md:text-[54px] font-medium leading-[1.2] md:leading-[68px] text-center tracking-tight underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent px-4"
        >
          Complete Cloud
          <br/>
          Platform for Modern Applications
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-sm md:text-sm mx-auto md:text-lg font-normal leading-5 md:leading-6 tracking-[-0.015em] text-center underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent px-4 max-w-[280px] md:max-w-none"
        >
          Deploy faster, scale smarter, and innovate with confidence - all from
          a single platform.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col gap-3 px-4 md:flex-row md:gap-4 justify-center"
        >
          <motion.a
            href="http://cal.com/receperdogan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="w-full md:w-auto bg-[#171717]/50 border-[1px] border-[#544642]  hover:bg-muted rounded-xl h-[48px] md:h-[44px] transition-all duration-300 ease-out hover:shadow-[0_0_20px_rgba(219,95,57,0.3)] [box-shadow:0px_-3px_10.6px_1px_hsla(0,0%,78%,0.16)_inset,0px_-4px_24.4px_0px_hsla(0,0%,81%,0.11)_inset]"
              size="lg"
            >
              Schedule Demo
            </Button>
          </motion.a>
          
          <motion.a
            href="https://console.virenet.com/auth/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="w-full md:w-auto bg-[#DB5F39] hover:bg-[#DB5F39]/90 rounded-xl [box-shadow:-2px_3px_8px_1px_#FFFFFF3D_inset] border-[1px] border-[#E9E9E914] h-[48px] md:h-[44px] transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(219,95,57,0.4)]"
              size="lg"
            >
              Start Deploying
            </Button>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
