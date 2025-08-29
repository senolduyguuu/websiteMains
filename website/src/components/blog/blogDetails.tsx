import { type FC } from 'react'
import { Clock, Eye, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ShareButton } from './ShareButton'

interface Blog {
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
  relatedPosts?: Blog[]
}

interface BlogDetailsLayoutProps {
  blog: Blog
}

// Simple HTML sanitization function for server-side
function sanitizeHtml(html: string): string {
  // Remove script tags and their content
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  
  // Remove event handlers
  html = html.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '')
  
  // Remove javascript: protocols
  html = html.replace(/javascript:/gi, '')
  
  return html
}

export const BlogDetailsLayout: FC<BlogDetailsLayoutProps> = ({ blog }) => {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
  const DIRECTUS_API_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_URL
  const imageUrl = blog.thumbnail
    ? `${DIRECTUS_API_URL}assets/${blog.thumbnail}`
    : undefined

  const authorAvatar = blog.author?.avatar
    ? blog.author.avatar.startsWith('http')
      ? blog.author.avatar
      : `${DIRECTUS_API_URL}assets/${blog.author.avatar}`
    : undefined

  // Sanitize content on server-side
  const sanitizedContent = sanitizeHtml(blog.content)

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
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    {blog.category?.name && (
                      <span className="bg-[#FF835E]/10 text-[#FF835E] border border-[#FF835E]/20 rounded-full px-4 py-1.5 text-sm font-medium">
                        {blog.category.name}
                      </span>
                    )}
                    {blog.date_created && (
                      <span className="text-[#BABABA] text-sm">
                        {new Date(blog.date_created).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    )}
                    {blog.readingTime && (
                      <span className="flex items-center gap-1 text-[#BABABA] text-sm">
                        <Clock className="w-4 h-4" />
                        {blog.readingTime}
                      </span>
                    )}
                    {blog.views && (
                      <span className="flex items-center gap-1 text-[#BABABA] text-sm">
                        <Eye className="w-4 h-4" />
                        {blog.views} views
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-medium tracking-tight bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent mb-4">
                    {blog.title}
                  </h1>
                  {blog.author?.fullname && (
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#171717] border border-[#FFFFFF14] flex items-center justify-center overflow-hidden">
                        {authorAvatar ? (
                          <img 
                            src={authorAvatar} 
                            alt={blog.author.fullname}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg className="w-5 h-5 text-[#FF835E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                      </div>
                      <span className="text-[#BABABA] text-sm">{blog.author.fullname}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div
            className="text-[#BABABA] leading-relaxed [&_table]:w-full [&_table]:border [&_td]:border [&_th]:border [&_th]:bg-[#232323] [&_td]:p-2"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />

          {/* Author Bio Section */}
          {blog.author?.bio && (
            <div className="mt-12 p-6 bg-[#171717] rounded-xl border border-[#FFFFFF14]">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-[#171717] border border-[#FFFFFF14] flex items-center justify-center overflow-hidden flex-shrink-0">
                  {authorAvatar ? (
                    <img 
                      src={authorAvatar} 
                      alt={blog.author.fullname}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="w-8 h-8 text-[#FF835E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">About {blog.author.fullname}</h3>
                  <p className="text-[#BABABA] text-sm md:text-base">{blog.author.bio}</p>
                </div>
              </div>
            </div>
          )}

          {/* Footer Section */}
          <div className="mt-12 pt-8 border-t border-[#FFFFFF14]">
            <div className="w-full flex items-center justify-between gap-4">
              {/* Back to Blog Button (far left) */}
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171717] border border-[#FFFFFF14] text-[#BABABA] hover:text-white hover:bg-[#232323] transition-colors shadow-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>

              {/* Share Buttons (far right) */}
              <div className="flex-shrink-0">
                <ShareButton title={blog.title} />
              </div>
            </div>
          </div>

          {/* Related Posts Section */}
          {blog.relatedPosts && blog.relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-medium mb-8 text-white">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blog.relatedPosts.map((post, index) => (
                  <Link 
                    key={index}
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <div className="bg-[#171717] rounded-xl border border-[#FFFFFF14] overflow-hidden transition-all group-hover:border-[#FF835E]/20">
                      {post.thumbnail && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={`${directusUrl}/assets/${post.thumbnail}`}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#FF835E] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#BABABA] line-clamp-2">
                          {post.content.replace(/<[^>]*>/g, '').slice(0, 150)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}