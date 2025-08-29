"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getCategoryName } from "@/lib/utils";

interface AppSidebarProps {
  category: string;
  website: string;
  repository: string;
  technologies: string[];
  version?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  requirements?: string[];
}

const AppSidebar = ({
  category,
  website,
  repository,
  technologies,
  version = "1.2.0",
  status,
  createdAt,
  updatedAt,
  requirements,
}: AppSidebarProps) => {
  return (
    <div className="w-80 space-y-6">
      {/* Version Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[hsl(var(--grey-600))]/30 backdrop-blur-sm rounded-2xl p-4 border border-[hsl(var(--grey-500))]/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-[hsl(var(--green-500))] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm text-[hsl(var(--grey-200))]">
              Latest Version
            </span>
          </div>
          <span className="text-sm font-medium text-white bg-[hsl(var(--grey-500))]/50 px-2 py-1 rounded-md">
            v{version}
          </span>
        </div>
      </motion.div>

      {/* Main App Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="bg-[hsl(var(--grey-600))]/50 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(var(--grey-500))]/20"
      >
        <div className="space-y-6">
          {/* Status */}
          {status && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <span className="text-xs font-medium text-[hsl(var(--grey-300))] uppercase tracking-wider">
                Status
              </span>
              <div className="flex items-center space-x-2 mt-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    status === "stable"
                      ? "bg-[hsl(var(--green-500))]"
                      : status === "beta"
                      ? "bg-[hsl(var(--yellow-500))]"
                      : "bg-[hsl(var(--red-500))]"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    status === "stable"
                      ? "text-[hsl(var(--green-400))]"
                      : status === "beta"
                      ? "text-[hsl(var(--yellow-400))]"
                      : "text-[hsl(var(--red-400))]"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>
            </motion.div>
          )}

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="text-xs font-medium text-[hsl(var(--grey-300))] uppercase tracking-wider">
              Category
            </span>
            <p className="text-white font-medium mt-1">
              {getCategoryName(category)}
            </p>
          </motion.div>

          {/* Website */}
          {website && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <span className="text-xs font-medium text-[hsl(var(--grey-300))] uppercase tracking-wider">
                Website
              </span>
              <motion.a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--orange-400))] hover:text-[hsl(var(--orange-300))] transition-colors duration-200 block text-sm mt-1"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {website.replace("https://", "")}
              </motion.a>
            </motion.div>
          )}

          {/* Repository */}
          {repository && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="text-xs font-medium text-[hsl(var(--grey-300))] uppercase tracking-wider">
                Repository
              </span>
              <motion.a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--orange-400))] hover:text-[hsl(var(--orange-300))] transition-colors duration-200 block text-sm mt-1"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <span className="text-xs font-medium text-[hsl(var(--grey-300))] uppercase tracking-wider">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "hsl(var(--grey-500))",
                    }}
                    className="px-2 py-1 bg-[hsl(var(--grey-500))]/30 rounded-md text-xs text-[hsl(var(--grey-200))] cursor-pointer transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* System Requirements */}
          {requirements && requirements.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
            >
              <span className="text-xs font-medium text-[hsl(var(--grey-300))] uppercase tracking-wider">
                System Requirements
              </span>
              <div className="space-y-2 mt-2">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.75 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-[hsl(var(--orange-500))] rounded-full"></div>
                    <span className="text-sm text-[hsl(var(--grey-200))]">
                      {requirement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="bg-[hsl(var(--grey-500))]/20 rounded-xl p-4"
            >
              <h3 className="text-sm font-semibold text-white mb-2">
                Easy Setup
              </h3>
              <p className="text-xs text-[hsl(var(--grey-200))]">
                Get started in minutes with our one-click deployment process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.85 }}
              className="bg-[hsl(var(--grey-500))]/20 rounded-xl p-4"
            >
              <h3 className="text-sm font-semibold text-white mb-2">Secure</h3>
              <p className="text-xs text-[hsl(var(--grey-200))]">
                Enterprise-grade security with built-in authentication and
                authorization.
              </p>
            </motion.div>
          </div>

          {/* Deploy Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="pt-4 border-t border-[hsl(var(--grey-500))]/20"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                className="w-full bg-[hsl(var(--orange-500))] hover:bg-[hsl(var(--orange-600))] text-white font-semibold py-4 text-lg rounded-xl transition-all duration-200"
                size="lg"
              >
                <motion.svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path d="M8 5v14l11-7z" />
                </motion.svg>
                DEPLOY
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppSidebar;
