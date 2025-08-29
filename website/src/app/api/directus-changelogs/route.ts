import { NextResponse } from 'next/server'

export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug')
  const sort = searchParams.get('sort')
  const limit = searchParams.get('limit')
  const directusApiUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
  let apiUrl = `${directusApiUrl}?fields=*,category.name,author.*&filter[category][name][_eq]=Changelog`
  
  if (slug) {
    apiUrl += `&filter[slug][_eq]=${slug}`
  }
  
  if (sort) {
    apiUrl += `&sort=${sort}`
  }
  
  if (limit) {
    apiUrl += `&limit=${limit}`
  }
  
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch from Directus', details: err instanceof Error ? err.message : err }, { status: 500 })
  }
} 