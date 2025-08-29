"use client";

import { motion } from "framer-motion";

interface AppDetailsProps {
  appName: string;
  description: string;
  overview: string;
  shortDescription?: string;
  requirements?: string[];
  icon?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

const AppDetails = ({
  appName,
  description,
  overview,
  shortDescription,
  requirements,
  icon,
  status,
  createdAt,
  updatedAt,
}: AppDetailsProps) => {
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
            {icon ? (
              <img src={icon} alt={appName} className="w-8 h-8" />
            ) : (
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-[hsl(var(--orange-600))] rounded-sm"></div>
              </div>
            )}
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
              {status && (
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    status === "stable"
                      ? "bg-[hsl(var(--green-500))]/20 text-[hsl(var(--green-400))] border-[hsl(var(--green-500))]/30"
                      : status === "beta"
                      ? "bg-[hsl(var(--yellow-500))]/20 text-[hsl(var(--yellow-400))] border-[hsl(var(--yellow-500))]/30"
                      : "bg-[hsl(var(--red-500))]/20 text-[hsl(var(--red-400))] border-[hsl(var(--red-500))]/30"
                  }`}
                >
                  {status.toUpperCase()}
                </span>
              )}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl font-bold text-white mb-3"
            >
              {appName.toUpperCase()}
            </motion.h1>
            {shortDescription && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="text-[hsl(var(--orange-400))] text-lg font-medium mb-3"
              >
                {shortDescription}
              </motion.p>
            )}
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

      {/* Requirements Section */}
      {requirements && requirements.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          whileHover={{ scale: 1.01 }}
          className="bg-[hsl(var(--grey-600))]/30 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(var(--grey-500))]/20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="text-xl font-semibold text-white mb-4"
          >
            System Requirements
          </motion.h2>
          <div className="space-y-3">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-[hsl(var(--orange-500))] rounded-full"></div>
                <span className="text-[hsl(var(--grey-200))]">
                  {requirement}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

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

      {/* Metadata Section */}
      {(createdAt || updatedAt) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[hsl(var(--grey-600))]/20 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(var(--grey-500))]/20"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-lg font-semibold text-white mb-4"
          >
            Metadata
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {createdAt && (
              <div>
                <span className="text-[hsl(var(--grey-300))]">Created:</span>
                <span className="text-[hsl(var(--grey-200))] ml-2">
                  {new Date(createdAt).toLocaleDateString()}
                </span>
              </div>
            )}
            {updatedAt && (
              <div>
                <span className="text-[hsl(var(--grey-300))]">
                  Last Updated:
                </span>
                <span className="text-[hsl(var(--grey-200))] ml-2">
                  {new Date(updatedAt).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AppDetails;
