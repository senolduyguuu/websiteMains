import { type FC } from 'react'
import { Clock, Eye, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ShareButton } from '../blog/ShareButton'

interface Changelog {
  title: string
  content: string
  coverImage?: string | { id: string }
  category?: {
    name: string
  }
  author?: { 
    fullname?: string
    avatar?: string
    bio?: string
  }
  date_created?: string
  thumbnail?: string
  readingTime?: string
  views?: number
  relatedPosts?: Changelog[]
}

interface ChangelogsDetailsLayoutProps {
  changelog: Changelog
}

export const ChangelogsDetailsLayout: FC<ChangelogsDetailsLayoutProps> = ({ changelog }) => {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
  const DIRECTUS_API_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_URL
  const imageUrl = changelog.thumbnail
    ? `${DIRECTUS_API_URL}assets/${changelog.thumbnail}`
    : undefined
  const authorAvatar = changelog.author?.avatar
    ? changelog.author.avatar.startsWith('http')
      ? changelog.author.avatar
      : `${DIRECTUS_API_URL}assets/${changelog.author.avatar}`
    : undefined

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: changelog.title,
          text: changelog.title,
          url: shareUrl
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  return (
    <section className="bg-foreground flex flex-col mx-0 md:mx-36 border-x border-1 border-[#ffffff14]">
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="relative mb-12">
            {imageUrl && (
              <div className="relative w-full h-[300px] md:h-[400px] mb-8 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent z-10" />
                <img
                  src={imageUrl}
                  alt={changelog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    {changelog.category?.name && (
                      <span className="bg-[#FF835E]/10 text-[#FF835E] border border-[#FF835E]/20 rounded-full px-4 py-1.5 text-sm font-medium">
                        {changelog.category.name}
                      </span>
                    )}
                    {changelog.date_created && (
                      <span className="text-[#BABABA] text-sm">
                        {new Date(changelog.date_created).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    )}
                    {changelog.readingTime && (
                      <span className="flex items-center gap-1 text-[#BABABA] text-sm">
                        <Clock className="w-4 h-4" />
                        {changelog.readingTime}
                      </span>
                    )}
                    {changelog.views && (
                      <span className="flex items-center gap-1 text-[#BABABA] text-sm">
                        <Eye className="w-4 h-4" />
                        {changelog.views} views
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-medium tracking-tight bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent mb-4">
                    {changelog.title}
                  </h1>
                  {changelog.author?.fullname && (
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#171717] border border-[#FFFFFF14] flex items-center justify-center overflow-hidden">
                        {authorAvatar ? (
                          <img 
                            src={authorAvatar} 
                            alt={changelog.author.fullname}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg className="w-5 h-5 text-[#FF835E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#BABABA] text-sm font-medium">{changelog.author.fullname}</span>
                        {changelog.author.bio && (
                          <span className="text-[#BABABA] text-xs mt-0.5 line-clamp-2 max-w-xs">{changelog.author.bio}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="prose prose-invert max-w-none">
            <div 
              className="text-[#BABABA] leading-relaxed [&>h1]:text-3xl [&>h1]:md:text-4xl [&>h1]:font-medium [&>h1]:tracking-tight [&>h1]:bg-gradient-to-b [&>h1]:from-white [&>h1]:to-[#BABABA] [&>h1]:bg-clip-text [&>h1]:text-transparent [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-medium [&>h2]:tracking-tight [&>h2]:bg-gradient-to-b [&>h2]:from-white [&>h2]:to-[#BABABA] [&>h2]:bg-clip-text [&>h2]:text-transparent [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-medium [&>h3]:tracking-tight [&>h3]:bg-gradient-to-b [&>h3]:from-white [&>h3]:to-[#BABABA] [&>h3]:bg-clip-text [&>h3]:text-transparent [&>p]:text-[#BABABA] [&>p]:text-sm [&>p]:md:text-base [&>a]:text-[#FF835E] [&>a]:hover:text-[#C22D00] [&>strong]:text-white [&>ul]:text-[#BABABA] [&>ul]:text-sm [&>ul]:md:text-base [&>ol]:text-[#BABABA] [&>ol]:text-sm [&>ol]:md:text-base [&>blockquote]:border-l-[#FF835E] [&>blockquote]:text-[#BABABA] [&>code]:bg-[#171717] [&>code]:text-[#FF835E] [&>pre]:bg-[#171717] [&>pre]:border [&>pre]:border-[#FFFFFF14] [&>pre]:text-[#BABABA]" 
              dangerouslySetInnerHTML={{ __html: changelog.content }} 
            />
          </div>

          {/* Author Bio Section */}
          {changelog.author?.bio && (
            <div className="mt-12 p-6 bg-[#171717] rounded-xl border border-[#FFFFFF14]">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-[#171717] border border-[#FFFFFF14] flex items-center justify-center overflow-hidden flex-shrink-0">
                  {authorAvatar ? (
                    <img 
                      src={authorAvatar} 
                      alt={changelog.author.fullname}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="w-8 h-8 text-[#FF835E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">About {changelog.author.fullname}</h3>
                  <p className="text-[#BABABA] text-sm md:text-base">{changelog.author.bio}</p>
                </div>
              </div>
            </div>
          )}

          {/* Footer Section */}
          <div className="mt-12 pt-8 border-t border-[#FFFFFF14]">
            <div className="w-full flex items-center justify-between gap-4">
              {/* Back to Changelogs Button (far left) */}
              <Link 
                href="/changelogs" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171717] border border-[#FFFFFF14] text-[#BABABA] hover:text-white hover:bg-[#232323] transition-colors shadow-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Changelogs</span>
              </Link>

              {/* Share Buttons (far right) */}
              <div className="flex-shrink-0">
                <ShareButton title={changelog.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}