"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import line from "@/public/images/line.png";
import lineLeft from "@/public/images/lineLeft.png";
import { Button } from "./ui/button";
function Counter({
  value,
  duration = 2,
}: {
  value: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  const isAnimatable = /^\d+\+?$/.test(value);
  const endValue = isAnimatable ? parseInt(value.replace(/\D/g, "")) : 0;

  useEffect(() => {
    if (inView && isAnimatable) {
      let start = 0;
      const increment = endValue / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, endValue, duration, isAnimatable]);

  return (
    <span ref={ref}>
      {isAnimatable ? count + (value.includes("+") ? "+" : "") : value}
    </span>
  );
}

const metrics = [
  {
    icon: <Icon icon="ri:cloudy-line" className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "7.5K+",
    label: "Container Launched Globally",
    description: "Scale smarter. Expertly managed containers for peak performance and resource efficiency, reducing your operational overhead.",
  },
  {
    icon: <Icon icon="ri:box-1-line" className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "Hundreds",
    label: "Orchestrated Container Workloads",
    description: "Simplifying complex container deployments, ensuring seamless operation and management for even the most demanding apps.",
  },
  {
    icon: <Icon icon="ri:line-chart-line" className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "99.97%",
    label: "Availability & Performance",
    description: "Engineered for maximum availability, ensuring your services are always online and performing optimally for your users.",
  },
  {
    icon: <Icon icon="ri:global-line" className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "Worldwide",
    label: "Infrastructure",
    description: "Geo-Distributed Resiliency. Deploy applications across multiple regions for enhanced scalability, disaster recovery, and a truly global presence.",
  },
];

export default function Metrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="flex items-center justify-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4">
            <Image
              src={line}
              alt="line"
              className="relative bottom-[30px] left-[-57px]"
            />
            <div className="bg-foreground border border-[#FFFFFF14] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm [box-shadow:0px_-3px_2.6px_1px_#C7C7C729_inset,0px_-4px_24.4px_-14px_#E98260_inset] text-[#F4CDC2] whitespace-nowrap">
              Metrics
            </div>
            <Image
              src={lineLeft}
              alt="lineLeft"
              className="relative bottom-[30px] right-[-57px]"
            />
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter px-2 text-tx-primary">
            Scale & Performance <br /> Across Enterprise Solutions
          </h3>
          <p className="text-[14px] sm:text-base text-muted-foreground mx-auto max-w-[700px] px-2">
            Setting new standards in enterprise-grade infrastructure and <br/>
            deployment automation
          </p>
          <Button
            className="bg-transparent border-[1px] hover:bg-muted rounded-xl px-3 text-sm sm:text-base"
            variant="gradient"
            size="default"
            onClick={() => window.open('https://console.virenet.com/auth/sign-up', '_blank')}
          >
            Deploy your first app
          </Button>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center justify-between text-center p-4 sm:p-6 h-full"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-3 sm:px-4 text-white py-[6px] mb-6 sm:mb-8 rounded-full border bg-gradient-to-b from-white/[0.08] to-white/[0.04] shadow-[0px_16.73px_16.73px_0px_#0000004D] backdrop-blur-[22.3px] border-[#ffffff0c]"
                >
                  {metric.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl mb-1 font-medium text-tx-primary">
                  <Counter value={metric.value} />
                </h3>
                <p className="text-sm sm:text-base font-medium text-tx-primary mb-1">
                  {metric.label}
                </p>
                <p className="text-xs sm:text-sm text-tx-secondary">
                  {metric.description}
                </p>
              </div>
              {index < metrics.length - 1 && (
                <div className="hidden lg:block absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-px h-16 sm:h-20 border-r border-[#FFFFFF14]" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
