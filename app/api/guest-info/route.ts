// app/api/register-guest/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = cookies()
  const userId = cookieStore.get('user_id')?.value

  if (!userId) {
    return new NextResponse('Missing user_id cookie', { status: 400 })
  }

  // Return the user_id as JSON
  return NextResponse.json({ user_id: userId })
}
