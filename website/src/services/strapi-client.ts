export interface BlogData {
  id: number
  documentId: string
  Title: string
  Description: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface BlogResponse {
  data: BlogData
  meta: Record<string, unknown>
}

const STRAPI_BASE_URL = 'https://strapi.virenet.com/api'

// ✅ Tüm blogları getiren fonksiyon
export async function fetchBlogPage(): Promise<BlogResponse> {
  const response = await fetch(`${STRAPI_BASE_URL}/blogs-page`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch blog page: ${response.status}`)
  }

  return response.json()
}

// ✅ Tek bir blog yazısını slug ile getiren fonksiyon
export async function fetchBlogBySlug(slug: string): Promise<BlogResponse> {
  const response = await fetch(`${STRAPI_BASE_URL}/blogs?filters[slug][$eq]=${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.status}`)
  }

  return response.json()
}

export async function getBlogData(slug: string) {
  const response = await fetchBlogBySlug(slug)
  return response.data
}
