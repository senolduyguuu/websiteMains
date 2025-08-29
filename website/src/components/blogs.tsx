"use client"
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from 'next/link'
import { BlogHero } from './blog/blogHero'

interface Article {
  id: number
  title: string
  content: string
  category?: { name: string }
  slug: string
  thumbnail?: string
  date_created?: string
}

interface BlogsCardsProps {
  limit?: number
  sort?: string
}

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL
const DIRECTUS_API_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_URL

export default function BlogsCards({ limit, sort = '-date_created' }: BlogsCardsProps) {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `/api/directus-articles?sort=${sort}`
        if (limit) {
          url += `&limit=${limit}`
        }
        
        const response = await fetch(url)
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()
        if (!data.data) throw new Error('API response does not contain data field')
        setArticles(data.data)
      } catch (err) {
        setError('Failed to fetch articles: ' + (err instanceof Error ? err.message : 'Unknown error'))
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticles()
  }, [limit, sort])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        {error}
      </div>
    )
  }

  return (
    <>
      <section className="flex border-b items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full min-h-screen px-4 py-8 sm:p-6 md:p-8 lg:p-12">
          {/* Cards Grid Container */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Dynamic Intersection Circles */}
            {(() => {
              const totalRows = Math.ceil(articles.length / 2)
              const circles = []
              
              // Grid kenarlarındaki ve içindeki tüm kesişim noktaları
              for (let row = 0; row <= totalRows; row++) {
                for (let col = 0; col <= 2; col++) {
                  const topPercent = totalRows === 1 ? 50 : (row / totalRows) * 100
                  const leftPercent = col === 0 ? 0 : col === 1 ? 50 : 100
                  
                  circles.push(
                    <div
                      key={`circle-${row}-${col}`}
                      className="hidden md:block absolute z-10 h-3 w-3 sm:h-4 sm:w-4 rounded-full border-4 bg-grey-600"
                      style={{
                        top: `${topPercent}%`,
                        left: `${leftPercent}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  )
                }
              }
              
              return circles
            })()}
            {/* Cards Grid */}
            <div className="grid gap-4 sm:gap-6 md:gap-0 grid-cols-1 sm:grid-cols-2 w-full">
              {articles.map((item, i) => {
                // 2x2 grid pattern için pozisyon hesaplama
                const row = Math.floor(i / 2)
                const col = i % 2
                const isTopRow = row === 0
                const isBottomRow = row === Math.floor((articles.length - 1) / 2)
                const isLeftCol = col === 0
                const isRightCol = col === 1
                
                return (
                  <Link href={`/blog/${item.slug}`} key={item.id} className="block transition-transform hover:scale-[1.02]">
                    <Card
                      className={`relative w-full h-auto sm:h-[400px] md:h-[500px]
                      ${isLeftCol ? "md:border-r-0" : ""} 
                      ${!isBottomRow ? "md:border-b-0" : ""}
                      ${
                        isTopRow && isLeftCol
                          ? "md:rounded-tr-none md:rounded-br-none md:rounded-bl-none"
                          : ""
                      }
                      ${
                        isTopRow && isRightCol
                          ? "md:rounded-tl-none md:rounded-bl-none md:rounded-br-none"
                          : ""
                      }
                      ${
                        isBottomRow && isLeftCol
                          ? "md:rounded-tr-none md:rounded-tl-none md:rounded-br-none"
                          : ""
                      }
                      ${
                        isBottomRow && isRightCol
                          ? "md:rounded-tl-none md:rounded-tr-none md:rounded-bl-none"
                          : ""
                      }
                      ${
                        !isTopRow && !isBottomRow && isLeftCol
                          ? "md:rounded-tr-none md:rounded-br-none md:rounded-tl-none md:rounded-bl-none"
                          : ""
                      }
                      ${
                        !isTopRow && !isBottomRow && isRightCol
                          ? "md:rounded-tl-none md:rounded-bl-none md:rounded-tr-none md:rounded-br-none"
                          : ""
                      }
                    `}
                    >
                      <CardHeader className="p-0">
                        <div className="flex items-center justify-center mt-5">
                          {item.thumbnail ? (
                            <div className="bg-background w-[400px] h-[201px] rounded-lg flex items-center justify-center overflow-hidden">
                              <img
                                src={`${DIRECTUS_API_URL}assets/${item.thumbnail}`}
                                alt={item.title}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          ) : (
                            <div className="bg-background w-[400px] h-[201px] rounded-lg flex items-center justify-center">
                              <span className="w-12 h-12 bg-zinc-700 rounded-lg inline-block" />
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 flex-grow">
                        <Badge
                          variant="secondary"
                          className="bg-[hsla(14,58%,14%,1)] text-[#F4CDC2] hover:bg-[hsla(14,58%,14%,0.9)] flex items-center gap-2 w-fit border border-[hsla(14,69%,54%,0.1)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E98260]" />
                          {item.category?.name || 'Uncategorized'}
                        </Badge>
                        <h3 className="text-lg sm:text-xl font-semibold text-white hover:text-[#F4CDC2] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-400">
                          {item.content?.replace(/<[^>]*>/g, '').slice(0, 200)}...
                        </p>
                      </CardContent>
                      <CardFooter className="">
                        <div className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm sm:text-base">
                          Read more
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
