"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Code,
  Database,
  Globe,
  Terminal,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BlogsCards from "../blogs";

type Article = {
  id: number;
  title: string;
  content: string;
  category?: { name: string };
  slug: string;
  thumbnail?: string;
};

const categoryIcons: Record<string, typeof Code> = {
  "Web Development": Code,
  Programming: Code,
  Database: Database,
  Cloud: Globe,
  DevOps: Terminal,
  API: FileText,
  Tutorial: BookOpen,
  Default: FileText,
};

function getCategoryIcon(category: string | undefined) {
  return category
    ? categoryIcons[category] || categoryIcons["Default"]
    : categoryIcons["Default"];
}

export default function BlogFeed() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/directus-articles");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        if (!data.data)
          throw new Error("API response does not contain data field");
        setArticles(data.data);
        setIsVisible(true);
      } catch (err) {
        setError(
          "Failed to fetch articles: " +
            (err instanceof Error ? err.message : "Unknown error")
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        {error}
      </div>
    );
  }

  return <BlogsCards sort="-date_created" />;
}
