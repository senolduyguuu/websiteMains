"use client";

import { motion } from "framer-motion";

interface AppHeaderProps {
  appName: string;
  description: string;
}

const AppHeader = ({ appName, description }: AppHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-6"
    >
      {/* Back Navigation */}
      <motion.a
        href="/deploy"
        className="inline-flex items-center text-sm text-[hsl(var(--grey-200))] hover:text-white transition-colors duration-200 w-fit"
        whileHover={{ x: -5 }}
        transition={{ duration: 0.2 }}
      >
        <motion.svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ x: -2 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </motion.svg>
        ALL APPS
      </motion.a>
    </motion.div>
  );
};

export default AppHeader;
