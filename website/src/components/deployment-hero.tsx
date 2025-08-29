'use client'

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function DeploymentHero() {
  return (
    <section className="flex items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
      {/* Animated diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Left diagonal lines */}
        <div className="absolute bottom-[15%] left-[5%] h-[45%] w-[1px] overflow-visible origin-bottom -rotate-[30deg]">
          <motion.div
            className="relative w-full h-full"
            style={{
              background: 'linear-gradient(to top, transparent 0%, #f97316 50%, transparent 100%)',
              boxShadow: '0 0 4px rgba(249, 115, 22, 0.4)'
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ 
              y: "-100%",
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
          </motion.div>
        </div>
        
        <div className="absolute bottom-[15%] left-[10%] h-[45%] w-[1px] overflow-visible origin-bottom -rotate-[30deg]">
          <motion.div
            className="relative w-full h-full"
            style={{
              background: 'linear-gradient(to top, transparent 0%, #f97316 50%, transparent 100%)',
              boxShadow: '0 0 4px rgba(249, 115, 22, 0.4)'
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ 
              y: "-100%",
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 1.25
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
          </motion.div>
        </div>

        {/* Right diagonal lines */}
        <div className="absolute bottom-[15%] right-[5%] h-[45%] w-[1px] overflow-visible origin-bottom rotate-[30deg]">
          <motion.div
            className="relative w-full h-full"
            style={{
              background: 'linear-gradient(to top, transparent 0%, #f97316 50%, transparent 100%)',
              boxShadow: '0 0 4px rgba(249, 115, 22, 0.4)'
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ 
              y: "-100%",
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0.75
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
          </motion.div>
        </div>

        <div className="absolute bottom-[15%] right-[10%] h-[45%] w-[1px] overflow-visible origin-bottom rotate-[30deg]">
          <motion.div
            className="relative w-full h-full"
            style={{
              background: 'linear-gradient(to top, transparent 0%, #f97316 50%, transparent 100%)',
              boxShadow: '0 0 4px rgba(249, 115, 22, 0.4)'
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ 
              y: "-100%",
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0,
              delay: 2
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-[56px] md:text-5xl lg:text-[56px] font-bold tracking-tight text-tx-primary">
              <span className="block">Start Deploying</span>
              <span className="block mt-7">With Virenet</span>
            </h2>
          </div>
          <div className="space-y-4 md:space-y-7">
            <p className="text-base  md:text-sm text-[#BABABA] text-center md:text-left">
              Get started with our enterprise-grade deployment <br></br> system. Configure
              and launch your services in minutes. <br></br> Our automated system ensures
              seamless integration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <motion.a
                href="http://cal.com/receperdogan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  className="w-full sm:w-auto bg-transparent border-[1px] hover:bg-muted rounded-xl h-[48px] md:h-[44px] transition-all duration-300 ease-out hover:shadow-[0_0_20px_rgba(219,95,57,0.3)]"
                  variant="gradient"
                  size="lg"
                >
                  Schedule Demo
                </Button>
              </motion.a>
              
              <motion.a
                href="https://console.virenet.com/auth/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  className="w-full sm:w-auto bg-[#DB5F39] hover:bg-[#DB5F39]/90 rounded-xl [box-shadow:-2px_3px_8px_1px_#FFFFFF3D_inset] border-[1px] border-[#E9E9E914] h-[48px] md:h-[44px] transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(219,95,57,0.4)]"
                  size="lg"
                >
                  Start Deployment
                </Button>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
