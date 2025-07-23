import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const cookieName = 'user_id'
  const existing = req.cookies.get(cookieName)
  
  // If the cookie doesn't exist, create a new one
  if (!existing) {
    const id = uuidv4()
    res.cookies.set({
      name: cookieName,
      value: id,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365 * 10,
    })
  }

  // Site's redy for user
  return res
}
