import React from 'react'
import { ChangelogsDetailsLayout } from '@/components/changelogs/changeLogsDetails'

async function getChangelogBySlug(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const res = await fetch(`${baseUrl}/api/directus-changelogs/${slug}`, {
    next: { revalidate: 3600 } // 1 saat cache
  })
  
  if (!res.ok) {
    if (res.status === 404) {
      return null
    }
    throw new Error('Failed to fetch changelog')
  }
  
  const data = await res.json()
  return data?.data || null
}

export default async function ChangelogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const changelog = await getChangelogBySlug(slug)

  if (!changelog) {
    return <div className='text-center text-red-500'>Changelog not found.</div>
  }

  return <ChangelogsDetailsLayout changelog={changelog} />
} 