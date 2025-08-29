"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-background px-6 py-2.5 sm:px-3.5 mx-2 mb-0 rounded-xl">
      <div className="flex flex-1 flex-col sm:flex-row w-full">
        <div className="flex justify-between items-start sm:items-center w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-1.5 w-full">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <span className="flex h-5 w-5 text-orange-400">🔔</span>
              <span className="sm:hidden inline-flex items-center rounded-md bg-[#3A2A1B] px-3 py-1 text-xs font-medium text-orange-400 ring-1 ring-inset ring-orange-500/20">
                NEW
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-6 text-gray-200 text-left sm:text-center max-w-[280px] sm:max-w-none">
              Virenet secures $225K! Building stronger infrastructure and innovations.{" "}
              <a href="mailto:hello@virenet.com" className="inline-block underline">
                Join us!
              </a>
            </p>
            <span className="hidden sm:inline-flex items-center rounded-md bg-[#3A2A1B] px-3 py-1 text-xs font-medium text-orange-400 ring-1 ring-inset ring-orange-500/20">
              NEW
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
