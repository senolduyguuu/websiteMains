import { NextResponse } from 'next/server'

const DIRECTUS_API_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_URL

export async function POST (req: Request) {
  try {
    const { email } = await req.json()
    const directusRes = await fetch(`${DIRECTUS_API_URL}items/newslettermember`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })

    if (directusRes.status === 204) {
      return new Response(null, { status: 204 })
    }

    if (directusRes.status === 400) {
      return NextResponse.json({ error: 'Invalid email or already subscribed' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Unknown error' }, { status: 500 })
  } catch (err) {
    return NextResponse.json({ error: 'Network error' }, { status: 500 })
  }
} 