"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppTemplates } from "@/hooks/useAppTemplates";
import {
  Search,
  Play,
  Filter,
  Grid,
  List,
  Rocket,
  Zap,
  ArrowRight,
  Download,
  Cloud,
  Loader2,
} from "lucide-react";
import {
  FaCrosshairs,
  FaChartBar,
  FaStar,
  FaLock,
  FaChartLine,
  FaBug,
  FaBolt,
  FaKey,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";

// Category mapping
export const APP_CATEGORY_MAP: { [key: number]: string } = {
  0: "CMS",
  10: "Database",
  20: "DevTools",
  30: "WebApps",
  40: "API",
  50: "Ecommerce",
  60: "Analytics",
  70: "Monitoring",
  80: "Security",
  90: "Communication",
  100: "Storage",
  110: "AI_ML",
  120: "BlockchainWeb3",
  130: "Gaming",
  140: "Productivity",
};

// Helper function to get category name
export const getCategoryName = (categoryId: number): string => {
  return APP_CATEGORY_MAP[categoryId] || "Unknown";
};

// Icon mapping for different app categories
const getIconForCategory = (category: string) => {
  const iconMap: { [key: string]: any } = {
    CMS: FaStar,
    Database: FaKey,
    DevTools: FaBug,
    WebApps: FaBolt,
    API: FaBolt,
    Ecommerce: FaChartBar,
    Analytics: FaChartBar,
    Monitoring: FaChartLine,
    Security: FaLock,
    Communication: FaCalendarAlt,
    Storage: FaKey,
    AI_ML: FaCrosshairs,
    BlockchainWeb3: FaBolt,
    Gaming: FaStar,
    Productivity: FaCalendarAlt,
    AI: FaCrosshairs,
    STARTER: FaStar,
    AUTHENTICATION: FaLock,
    OBSERVABILITY: FaChartLine,
    OFFICE: FaCalendarAlt,
    MODEL: FaChartBar,
    GRAPHQL: FaBolt,
    SEARCH: FaSearch,
  };

  return iconMap[category] || FaStar;
};

const categories = [
  "CMS",
  "Database",
  "DevTools",
  "WebApps",
  "API",
  "Ecommerce",
  "Analytics",
  "Monitoring",
  "Security",
  "Communication",
  "Storage",
  "AI_ML",
  "BlockchainWeb3",
  "Gaming",
  "Productivity",
];

export default function DeployOneClickAppCard() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Fetch app templates using TanStack Query
  const {
    data: appTemplatesData,
    isLoading,
    error,
    refetch,
  } = useAppTemplates();

  console.log("🔄 Component rendered with data:", {
    isLoading,
    error: error?.message,
    dataLength: appTemplatesData?.data?.length || 0,
    selectedCategory,
    searchQuery,
  });

  // Get applications from API data or empty array if loading/error
  const applications = appTemplatesData?.data || [];

  // Filter applications based on search and category
  const filteredApps = applications.filter((app: any) => {
    const appCategoryName =
      typeof app.category === "number"
        ? getCategoryName(app.category)
        : app.category;
    const matchesCategory =
      selectedCategory === "ALL" || appCategoryName === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (app.shortDescription || app.description)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  console.log("🔍 Filtered apps:", {
    total: applications.length,
    filtered: filteredApps.length,
    category: selectedCategory,
    search: searchQuery,
  });

  const handleDeploy = (appId: number) => {
    console.log(`Deploying app with ID: ${appId}`);
    // Redirect to the detail page with the app ID
    router.push(`/deploy/${appId}`);
  };

  return (
    <section className="flex items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[hsl(var(--grey-600))]/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-[hsl(var(--grey-500))]/20"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[hsl(var(--grey-300))] w-5 h-5" />
              <Input
                type="text"
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-[hsl(var(--grey-700))]/80 border-[hsl(var(--grey-500))]/30 text-[hsl(var(--grey-0))] placeholder-[hsl(var(--grey-300))] focus:border-[hsl(var(--orange-500))] focus:ring-[hsl(var(--orange-500))]/20 rounded-xl"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 bg-[hsl(var(--grey-700))]/80 rounded-xl p-1 border border-[hsl(var(--grey-500))]/30">
              <Button
                onClick={() => setSelectedCategory("ALL")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === "ALL"
                    ? "bg-gradient-to-r from-[#DB5F39] to-[#E98260] text-white shadow-lg hover:shadow-[0_0_15px_rgba(219,95,57,0.3)] border border-[#E9E9E914] [box-shadow:-1px_2px_4px_1px_#FFFFFF2D_inset]"
                    : "bg-transparent text-[hsl(var(--grey-200))] hover:bg-[hsl(var(--grey-600))]/50"
                }`}
              >
                ALL
              </Button>
              {categories.slice(0, 4).map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#DB5F39] to-[#E98260] text-white shadow-lg hover:shadow-[0_0_15px_rgba(219,95,57,0.3)] border border-[#E9E9E914] [box-shadow:-1px_2px_4px_1px_#FFFFFF2D_inset]"
                      : "bg-transparent text-[hsl(var(--grey-200))] hover:bg-[hsl(var(--grey-600))]/50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-[hsl(var(--grey-700))]/80 rounded-xl p-1 border border-[hsl(var(--grey-500))]/30">
              <Button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-[#DB5F39] to-[#E98260] text-white shadow-lg hover:shadow-[0_0_15px_rgba(219,95,57,0.3)] border border-[#E9E9E914] [box-shadow:-1px_2px_4px_1px_#FFFFFF2D_inset]"
                    : "bg-transparent text-[hsl(var(--grey-200))] hover:bg-[hsl(var(--grey-600))]/50"
                }`}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-gradient-to-r from-[#DB5F39] to-[#E98260] text-white shadow-lg hover:shadow-[0_0_15px_rgba(219,95,57,0.3)] border border-[#E9E9E914] [box-shadow:-1px_2px_4px_1px_#FFFFFF2D_inset]"
                    : "bg-transparent text-[hsl(var(--grey-200))] hover:bg-[hsl(var(--grey-600))]/50"
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center py-16"
          >
            <div className="bg-[hsl(var(--grey-600))]/50 backdrop-blur-sm rounded-2xl p-12 border border-[hsl(var(--grey-500))]/20">
              <Loader2 className="text-6xl mb-4 mx-auto text-[hsl(var(--orange-400))] animate-spin" />
              <h3 className="text-2xl font-bold text-[hsl(var(--grey-0))] mb-2">
                Loading applications...
              </h3>
              <p className="text-[hsl(var(--grey-200))]">
                Fetching the latest app templates from our API
              </p>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center py-16"
          >
            <div className="bg-[hsl(var(--grey-600))]/50 backdrop-blur-sm rounded-2xl p-12 border border-[hsl(var(--grey-500))]/20">
              <div className="text-6xl mb-4 mx-auto text-red-400">⚠️</div>
              <h3 className="text-2xl font-bold text-[hsl(var(--grey-0))] mb-2">
                Error loading applications
              </h3>
              <p className="text-[hsl(var(--grey-200))] mb-4">
                {error.message || "Failed to fetch app templates"}
              </p>
              <Button
                onClick={() => refetch()}
                className="bg-gradient-to-r from-[#DB5F39] to-[#E98260] hover:from-[#E98260] hover:to-[#DB5F39] text-white"
              >
                Try Again
              </Button>
            </div>
          </motion.div>
        )}

        {/* Applications Grid/List */}
        {!isLoading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }`}
          >
            {filteredApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className={`bg-gradient-to-br from-[hsl(var(--grey-600))] to-[hsl(var(--grey-700))] rounded-2xl border border-[hsl(var(--grey-500))]/20 p-6 hover:shadow-2xl transition-all duration-300 flex flex-col ${
                  viewMode === "list" ? "flex-row items-center gap-6" : ""
                }`}
              >
                {/* App Icon and Title Row */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 bg-[hsl(var(--grey-600))] rounded-xl flex items-center justify-center border border-[hsl(var(--grey-500))]/30 flex-shrink-0"
                  >
                    {(() => {
                      const IconComponent = getIconForCategory(app.category);
                      return (
                        <IconComponent className="text-xl text-[hsl(var(--grey-200))]" />
                      );
                    })()}
                  </motion.div>

                  {/* App Title */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[hsl(var(--grey-0))]">
                      {app.name}
                    </h3>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--orange-500))]/20 text-[hsl(var(--orange-400))] text-xs font-medium rounded-full border border-[hsl(var(--orange-500))]/30">
                    {typeof app.category === "number"
                      ? getCategoryName(app.category)
                      : app.category}
                  </span>
                </div>

                {/* App Description */}
                <p className="text-[hsl(var(--grey-200))] text-sm leading-relaxed mb-6 flex-1">
                  {app.shortDescription || app.description}
                </p>

                {/* Deploy Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto"
                >
                  <Button
                    onClick={() => handleDeploy(app.id)}
                    className="w-full bg-gradient-to-r from-[#DB5F39] to-[#E98260] hover:from-[#E98260] hover:to-[#DB5F39] text-white transition-all duration-300 flex items-center justify-center gap-2 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-[0_0_25px_rgba(219,95,57,0.4)] border border-[#E9E9E914] [box-shadow:-2px_3px_8px_1px_#FFFFFF3D_inset]"
                  >
                    <Rocket className="w-4 h-4" />
                    Deploy Now
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No results message */}
        {!isLoading && !error && filteredApps.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="bg-[hsl(var(--grey-600))]/50 backdrop-blur-sm rounded-2xl p-12 border border-[hsl(var(--grey-500))]/20">
              <FaSearch className="text-6xl mb-4 mx-auto text-[hsl(var(--grey-300))]" />
              <h3 className="text-2xl font-bold text-[hsl(var(--grey-0))] mb-2">
                No applications found
              </h3>
              <p className="text-[hsl(var(--grey-200))]">
                Try adjusting your search criteria or browse all categories
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
