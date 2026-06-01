import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY is not set' }, { status: 500 })
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 1500,
      messages: body.messages,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    return NextResponse.json({ error: data.error?.message || 'API error' }, { status: response.status })
  }

  return NextResponse.json(data)
}
