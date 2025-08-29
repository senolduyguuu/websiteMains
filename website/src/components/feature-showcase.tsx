"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Icon } from "@iconify/react"
import { motion } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import Overview from "@/public/images/Overviews.png"

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  preview: string | StaticImageData
}

const features: Feature[] = [
  {
    id: 1,
    title: "Overview",
    description: "Streamline your development workflow with our integrated.",
    icon: <Icon icon="ri:layout-grid-line" />,
    preview: Overview,
  },
  {
    id: 2,
    title: "Monitoring",
    description: "Streamline your development workflow with our integrated.",
    icon: <Icon icon="ri:bar-chart-line" />,
    preview: "https://208vcfccjg.ufs.sh/f/7gSYdSlmNTka0x4jzFvjBsdloJX5uwUxKtpryWPV9Zg8qfaT",
  },
  {
    id: 3,
    title: "Integrations",
    description: "Streamline your development workflow with our integrated.",
    icon: <Icon icon="ri:equalizer-line" />,
    preview: "https://208vcfccjg.ufs.sh/f/7gSYdSlmNTka82X0ZlLTnO5vcXEp312gSkQixwqVFyjzRCtD",
  },
  {
    id: 4,
    title: "PostgreSQL",
    description: "Streamline your development workflow with our integrated.",
    icon: <Icon icon="ri:hard-drive-2-line" />,
    preview: "https://208vcfccjg.ufs.sh/f/7gSYdSlmNTkapVmMgcjTuEHoLaWOFi1mq5NgQYceJMdv4Bzy",
  },
]

export default function FeatureShowcase() {
  const [selectedFeature, setSelectedFeature] = useState(features[0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [flowDirection, setFlowDirection] = useState("right")

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setSelectedFeature((current) => {
        const currentIndex = features.findIndex((f) => f.id === current.id)
        const nextIndex = (currentIndex + 1) % features.length
        return features[nextIndex]
      })
    }, 5000) 

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleFeatureClick = (feature: Feature) => {
    setFlowDirection(feature.id > selectedFeature.id ? "right" : "left")
    setSelectedFeature(feature)
    setIsAutoPlaying(false)
  }

  return (
    <div className="w-full ">
      {/* Preview Section */}
      <PreviewSection 
        selectedFeature={selectedFeature}
        setIsAutoPlaying={setIsAutoPlaying}
      />

      {/* Features Grid Section */}
      <FeaturesGrid 
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        isAutoPlaying={isAutoPlaying}
        setIsAutoPlaying={setIsAutoPlaying}
        flowDirection={flowDirection}
        setFlowDirection={setFlowDirection}
      />
    </div>
  )
}

// Preview Section Component
function PreviewSection({ 
  selectedFeature, 
  setIsAutoPlaying 
}: { 
  selectedFeature: Feature
  setIsAutoPlaying: (value: boolean) => void 
}) {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: [0, 1],
          y: [50, 0],
          transition: { duration: 1 },
        }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          key={selectedFeature.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="relative aspect-video bg-[#272727] rounded-3xl overflow-hidden z-20 group cursor-pointer"
          onHoverStart={() => setIsAutoPlaying(false)}
          onHoverEnd={() => setIsAutoPlaying(true)}
        >
          {/* Top Center Glow Effect */}
          <div 
            className="absolute w-[40%] h-[20%] left-1/2 -translate-x-1/2 -top-[10%] bg-primary/20 blur-[100px]" 
          />
          
          <div className="absolute inset-0 from-primary/10 to-primary/5 transition-all duration-500 group-hover:opacity-0" />

          {/* Glow Effect */}
          <div className="absolute -inset-1  from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground p-2">
            {typeof selectedFeature.preview === "string" ? (
              <img
                src={selectedFeature.preview || "/placeholder.svg"}
                alt={selectedFeature.title}
                className="w-full h-full object-cover object-top rounded-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary/20"
              />
            ) : (
              <Image
                src={selectedFeature.preview || "/placeholder.svg"}
                alt={selectedFeature.title}
                className="w-full h-full object-cover object-top rounded-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary/20"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Features Grid Section Component
function FeaturesGrid({
  selectedFeature,
  setSelectedFeature,
  isAutoPlaying,
  setIsAutoPlaying,
  flowDirection,
  setFlowDirection
}: {
  selectedFeature: Feature
  setSelectedFeature: (feature: Feature) => void
  isAutoPlaying: boolean
  setIsAutoPlaying: (value: boolean) => void
  flowDirection: string
  setFlowDirection: (direction: string) => void
}) {
  const borderColors = {
    left: "hsla(14, 69%, 54%, 1)",
    top: "hsla(14, 69%, 54%, 1)", 
    right: "hsla(0, 0%, 100%, 0.08)", 
    bottom: "hsla(0, 0%, 100%, 0.08)", 
  }

  const createMultiColoredBorder = () => {
    return {
      background: 'transparent',
      boxShadow: `
        inset ${borderColors.left} 1px 0 0,
        inset ${borderColors.right} -1px 0 0,
        inset ${borderColors.bottom} 0 -1px 0
      `,
      borderTop: '0.5px solid transparent',
      borderImage: `linear-gradient(to right, 
        ${borderColors.top} 0%, 
        ${borderColors.top} 15%, 
        ${borderColors.top}40 30%,
        ${borderColors.top}10 60%,
        ${borderColors.top}00 100%
      ) 1`,
      maskImage:
        'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)',
      WebkitMaskImage:
        'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)',
      filter: 'drop-shadow(0 0 4px hsla(14, 69%, 54%, 0.3))'
    }
  }

  const handleFeatureClick = (feature: Feature) => {
    setFlowDirection(feature.id > selectedFeature.id ? "right" : "left")
    setSelectedFeature(feature)
    setIsAutoPlaying(false)
  }

  return (
    <section className="flex items-center mx-0 md:mx-36 border-x pt-12  border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Animated Flow Effect */}
          <motion.div
            className="absolute h-full w-[25%] bg-[#171717]/40 backdrop-blur-sm"
            animate={{
              x: ["0%", "300%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
            }}
          />

          {/* Cards Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                animate={{
                  scale: selectedFeature.id === feature.id ? 1.02 : 1,
                  transition: { duration: 0.2 },
                }}
                onHoverStart={() => setIsAutoPlaying(false)}
                onHoverEnd={() => setIsAutoPlaying(true)}
                className="relative z-10"
              >
                <Button
                  variant="ghost"
                  className={`group relative h-auto p-6 bg-gradient-to-b from-white/[0.04] to-white/[0.02] hover:from-white/[0.08] hover:to-white/[0.04] rounded-[12px] hover:backdrop-blur-[22.3px] border border-[#ffffff14] transition-all duration-500 ease-out overflow-hidden
                    ${
                      selectedFeature.id === feature.id
                        ? "ring-1 ring-[#ffffff14] from-white/[0.08] to-white/[0.04] shadow-[0px_16.73px_16.73px_0px_#0000004D]"
                        : ""
                    }
                  `}
                  onClick={() => handleFeatureClick(feature)}
                >
                  {selectedFeature.id === feature.id && (
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      {/* Continuous border using pseudo-element with multi-colored borders */}
                      <motion.div
                        className="absolute inset-0 rounded-[12px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={createMultiColoredBorder()}
                      />

                      {/* Corner glow effects with corresponding colors */}
                      <div
                        className="absolute left-0 top-0 w-[3px] h-[3px]"
                        style={{
                          background: borderColors.left,
                          boxShadow: `0 0 4px 1px ${borderColors.left.replace("1)", "0.9)")}`,
                          borderRadius: "50%",
                        }}
                      />
                      <div
                        className="absolute right-0 top-0 w-[3px] h-[3px]"
                        style={{
                          background: borderColors.right,
                          boxShadow: `0 0 4px 1px ${borderColors.right.replace("1)", "0.9)")}`,
                          borderRadius: "50%",
                        }}
                      />
                      <div
                        className="absolute left-0 bottom-0 w-[3px] h-[3px]"
                        style={{
                          background: borderColors.left,
                          boxShadow: `0 0 4px 1px ${borderColors.left.replace("1)", "0.2)")}`,
                          borderRadius: "50%",
                          opacity: 0.3,
                        }}
                      />
                      <div
                        className="absolute right-0 bottom-0 w-[3px] h-[3px]"
                        style={{
                          background: borderColors.right,
                          boxShadow: `0 0 4px 1px ${borderColors.right.replace("1)", "0.2)")}`,
                          borderRadius: "50%",
                          opacity: 0.3,
                        }}
                      />

                      {/* Animated gradient overlay for the border */}
                      <motion.div
                        className="absolute inset-0 rounded-[12px] opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0.2, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                        style={{
                          background: "transparent",
                          boxShadow: `
                            inset ${borderColors.left.replace("1)", "0.7)")} 1px 0 0,
                            inset ${borderColors.top.replace("1)", "0.7)")} 0 1px 0,
                            inset ${borderColors.right.replace("1)", "0.7)")} -1px 0 0,
                            inset ${borderColors.bottom.replace("1)", "0.7)")} 0 -1px 0
                          `,
                          maskImage:
                            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                        }}
                      />
                    </div>
                  )}

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/[0.12] via-white/[0.08] to-transparent"
                    initial={{ opacity: 0, x: flowDirection === "right" ? "100%" : "-100%" }}
                    animate={{
                      opacity: selectedFeature.id === feature.id ? [0, 1, 1, 0] : 0,
                      x: flowDirection === "right" ? ["-100%", "0%", "0%", "100%"] : ["100%", "0%", "0%", "-100%"],
                    }}
                    transition={{
                      duration: 2.5, 
                      ease: "easeInOut",
                      times: [0, 0.4, 0.6, 1],
                      opacity: {
                        duration: 2.5,
                        times: [0, 0.4, 0.6, 1],
                      },
                    }}
                    key={`flow-${selectedFeature.id}-${feature.id}`}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                    initial={{ opacity: 0, x: flowDirection === "right" ? "100%" : "-100%" }}
                    animate={{
                      opacity: selectedFeature.id === feature.id ? [0, 1, 1, 0] : 0,
                      x: flowDirection === "right" ? ["-100%", "0%", "0%", "100%"] : ["100%", "0%", "0%", "-100%"],
                    }}
                    transition={{
                      duration: 2.5,
                      ease: "easeInOut",
                      times: [0, 0.4, 0.6, 1],
                      delay: 0.2, 
                    }}
                    key={`flow2-${selectedFeature.id}-${feature.id}`}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/[0.04] to-transparent"
                    initial={{ opacity: 0, x: flowDirection === "right" ? "100%" : "-100%" }}
                    animate={{
                      opacity: selectedFeature.id === feature.id ? [0, 0.5, 0.5, 0] : 0,
                      x: flowDirection === "right" ? ["-100%", "0%", "0%", "100%"] : ["100%", "0%", "0%", "-100%"],
                    }}
                    transition={{
                      duration: 2.5,
                      ease: "easeInOut",
                      times: [0, 0.4, 0.6, 1],
                      delay: 0.3, // Further delayed third layer
                    }}
                    key={`flow3-${selectedFeature.id}-${feature.id}`}
                  />

                  {/* Card Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      x: selectedFeature.id === feature.id ? 5 : 0,
                      transition: { duration: 0.3 },
                    }}
                    className="relative z-10 flex flex-col items-start text-left space-y-2 w-full min-h-[70px]"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xl transition-all duration-300 ${
                          selectedFeature.id === feature.id
                            ? "text-tx-primary scale-110"
                            : "text-[#DACFCB66] group-hover:text-tx-primary group-hover:scale-110"
                        }`}
                      >
                        {feature.icon}
                      </span>
                      <h3
                        className={`text-sm font-semibold transition-all duration-300 ${
                          selectedFeature.id === feature.id
                            ? "text-tx-primary translate-x-1"
                            : "text-[#DACFCBCC] group-hover:text-tx-primary group-hover:translate-x-1"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm line-clamp-3 whitespace-normal transition-all duration-300 ${
                        selectedFeature.id === feature.id
                          ? "bg-clip-text text-transparent bg-gradient-to-b from-white to-[#BABABA] translate-y-0.5"
                          : "text-[#999999] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#BABABA] group-hover:translate-y-0.5"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
