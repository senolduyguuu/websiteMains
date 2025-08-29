import { NextResponse } from 'next/server'

export async function GET (
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const directusApiUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
    const apiUrl = `${directusApiUrl}?fields=*,category.name,author.*,related_posts.*,related_posts.category.name,related_posts.author.*&filter[category][name][_eq]=Changelog&filter[slug][_eq]=${slug}&limit=1`
  
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    if (!data.data || data.data.length === 0) {
      return NextResponse.json({ error: 'Changelog not found' }, { status: 404 })
    }
    const relatedPostsUrl = `${directusApiUrl}?fields=*,category.name,author.*&filter[category][name][_eq]=Changelog&filter[slug][_neq]=${slug}&sort=-date_created&limit=3`
    const relatedResponse = await fetch(relatedPostsUrl)
    const relatedData = await relatedResponse.json()
    
    const changelog = data.data[0]
    changelog.relatedPosts = relatedData.data || []
    
    return NextResponse.json({ data: changelog })
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch changelog details', details: err instanceof Error ? err.message : err }, 
      { status: 500 }
    )
  }
} 