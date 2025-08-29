import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Category mapping based on AppTemplateCategoryType enum
export const getCategoryName = (categoryId: number | string): string => {
  const id = typeof categoryId === "string" ? parseInt(categoryId) : categoryId;

  const categoryMap: Record<number, string> = {
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
    110: "AI/ML",
    120: "Blockchain/Web3",
    130: "Gaming",
    140: "Productivity",
  };

  return categoryMap[id] || "Unknown";
};
