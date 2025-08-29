import { NextResponse } from 'next/server'

export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug')
  const sort = searchParams.get('sort')
  const limit = searchParams.get('limit')
  const directusApiUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
  
  console.log('API Route Debug:', {
    slug,
    sort,
    limit,
    directusApiUrl: directusApiUrl ? 'Set' : 'Not set'
  })
  
  if (!directusApiUrl) {
    console.error('DIRECTUS_API_URL environment variable is not set')
    return NextResponse.json({ 
      error: 'Directus API URL not configured',
      details: 'DIRECTUS_API_URL environment variable is missing'
    }, { status: 500 })
  }
    let apiUrl = `${directusApiUrl}?fields=*,category.name,author.*`
    if (slug) {
    apiUrl += `&filter[slug][_eq]=${slug}`
  } else {
    apiUrl += `&filter[category][name][_eq]=Tutorial`
  }
  
  if (sort) {
    apiUrl += `&sort=${sort}`
  }
  
  if (limit) {
    apiUrl += `&limit=${limit}`
  }
  
  try {
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error(`Directus API responded with status: ${response.status}`)
    }
    
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ 
      error: 'Failed to fetch from Directus', 
      details: err instanceof Error ? err.message : err 
    }, { status: 500 })
  }
} 