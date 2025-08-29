import React from 'react'
import { BlogDetailsLayout } from '@/components/blog/blogDetails'

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getBlogBySlug(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/directus-articles?slug=${slug}`, {
      cache: 'no-store' // Ensure fresh data
    })
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    
    const data = await res.json()
    console.log('API Response:', data) // Debug log
    
    if (!data?.data || data.data.length === 0) {
      console.log('No blog found for slug:', slug)
      return null
    }
    
    return data.data[0]
  } catch (error) {
    console.error('Error fetching blog:', error)
    throw error
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  
  try {
    const blog = await getBlogBySlug(slug)

    if (!blog) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-red-500 mb-4">Blog not found</h1>
            <p className="text-gray-400">The blog post "{slug}" could not be found.</p>
          </div>
        </div>
      )
    }

    return <BlogDetailsLayout blog={blog} />
  } catch (error) {
    console.error('Error in BlogDetailPage:', error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-500 mb-4">Error loading blog</h1>
          <p className="text-gray-400">Something went wrong while loading the blog post.</p>
        </div>
      </div>
    )
  }
} 