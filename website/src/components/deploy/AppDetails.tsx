"use client";

import { motion } from "framer-motion";

interface AppDetailsProps {
  appName: string;
  description: string;
  overview: string;
}

const AppDetails = ({ appName, description, overview }: AppDetailsProps) => {
  return (
    <div className="flex-1 space-y-8">
      {/* App Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ scale: 1.01 }}
        className="bg-[hsl(var(--grey-600))]/30 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(var(--grey-500))]/20"
      >
        <div className="flex items-start space-x-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
            className="w-16 h-16 rounded-xl bg-[hsl(var(--orange-500))] flex items-center justify-center"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-[hsl(var(--orange-600))] rounded-sm"></div>
            </div>
          </motion.div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center space-x-3 mb-3"
            >
              <span className="px-3 py-1 bg-[hsl(var(--orange-500))]/20 text-[hsl(var(--orange-400))] text-xs font-medium rounded-full border border-[hsl(var(--orange-500))]/30">
                OPEN SOURCE
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl font-bold text-white mb-3"
            >
              {appName.toUpperCase()}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[hsl(var(--grey-200))] text-lg leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
        className="bg-[hsl(var(--grey-600))]/30 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(var(--grey-500))]/20"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-xl font-semibold text-white mb-4"
        >
          Overview
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[hsl(var(--grey-200))] leading-relaxed"
        >
          {overview}
        </motion.p>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-[hsl(var(--grey-600))]/30 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(var(--grey-500))]/20"
        >
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-lg font-semibold text-white mb-3"
          >
            Easy Setup
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-[hsl(var(--grey-200))] text-sm"
          >
            Get started in minutes with our one-click deployment process.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-[hsl(var(--grey-600))]/30 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(var(--grey-500))]/20"
        >
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-lg font-semibold text-white mb-3"
          >
            Secure
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-[hsl(var(--grey-200))] text-sm"
          >
            Enterprise-grade security with built-in authentication and
            authorization.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AppDetails;
