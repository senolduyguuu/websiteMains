"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import { Database, Terminal, FileText, GitFork, Globe, Clock, ChevronRight } from "lucide-react"
import Link from 'next/link'

const iconMap = {
  Database,
  Terminal,
  FileText,
  GitFork,
  Globe,
  Clock
}

function getIconByCategory (categoryName?: string) {
  if (!categoryName) return FileText
  const key = categoryName.trim()
  return iconMap[key as keyof typeof iconMap] || FileText
}

export default function ChangelogFeed() {
  const [changelogItems, setChangelogItems] = useState([])
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    async function fetchChangelogs() {
      try {
        const res = await fetch('/api/directus-changelogs?sort=-date_created')
        const json = await res.json()
        setChangelogItems(json.data || [])
      } catch (err) {
        setChangelogItems([])
      }
    }
    fetchChangelogs()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <motion.section 
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex bg-foreground flex-col items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {changelogItems.map((item: any) => {
          const Icon = getIconByCategory(item.category?.name)
          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group"
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-[#1f1f1f] bg-[radial-gradient(circle_at_0%_0%,#b63a1380_0%,#1f1f1f_70%)] p-6  mb-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[hsla(14,58%,14%,1)] text-[#F4CDC2] border border-[hsla(14,69%,54%,0.1)]">{item.category?.name || 'Changelog'}</span>
                  <span className="text-[#ffffff]/70 text-xs">{item.readTime || ''}</span>
                  <span className="ml-auto w-8 h-8 bg-[#2a2a2a] rounded-full flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#ffffff]" />
                  </span>
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <Link href={`/changelogs/${item.slug}`}>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight hover:text-[#F4CDC2] transition-colors">{item.title}</h3>
                  </Link>
                  {item.content
                    ? <div className="text-sm sm:text-base   overflow-hidden text-zinc-400 flex-1 line-clamp-3" dangerouslySetInnerHTML={{ __html: item.content }} />
                    : <p className="text-sm sm:text-base text-zinc-400 flex-1 line-clamp-3">{item.description || ''}</p>
                  }
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[#ffffff]/70 text-xs">{item.author?.fullname || ''}</span>
                    <motion.div 
                      className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm sm:text-base p-0 h-auto bg-transparent border-none outline-none"
                      whileHover={{ x: 5 }}
                    >
                      <Link href={`/changelogs/${item.slug}`} className="flex items-center gap-2">
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {selectedId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[#1a1a1a]/20 rounded-xl p-4 mb-4"
                  >
                    <div className="space-y-2">
                      <p className="text-[#ffffff]/80 text-sm">
                        <span className="font-semibold">Release Date:</span> {item.date_created ? new Date(item.date_created).toLocaleDateString() : ''}
                      </p>
                      <p className="text-[#ffffff]/80 text-sm">
                        <span className="font-semibold">Category:</span> {item.category?.name || 'Changelog'}
                      </p>
                      <p className="text-[#ffffff]/80 text-sm">
                        <span className="font-semibold">Author:</span> {item.author?.fullname || ''}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="bg-[#DB5F39] hover:bg-[#DB5F39]/90 border border-[rgba(233,233,233,0.08)] shadow-[inset_-2px_3px_8px_1px_rgba(255,255,255,0.24)] rounded-lg transition-all duration-200 text-white px-8 py-3 font-semibold hover:scale-105"
        >
          Subscribe to Updates
        </Button>
      </motion.div> */}
    </motion.section>
  )
}
