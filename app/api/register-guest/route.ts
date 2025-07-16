// app/api/register-guest/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST() {
    console.log('[API] register-guest POST handler hit')
    
  const cookieStore = cookies()
  const userId = cookieStore.get('user_id')?.value
  console.log('userId cookie value:', userId)

  if (!userId) {
    return new NextResponse('Missing user_id cookie', { status: 400 })
  }

  // Check if user already exists
  const { data, error } = await supabase
  .from('USER')
  .select('id')
  .eq('uuid', userId)
  .maybeSingle()
  console.log('Check user result:', data, error)

  if (!data && !error) {
    const { error: insertError, data: insertData } = await supabase
      .from('USER')
      .insert([{ uuid: userId }])

      if (insertError) {
    console.error('Insert error:', insertError.message)
    return new NextResponse(`Insert error: ${insertError.message}`, { status: 500 })
    }

    console.log('Insert result:', data)
    console.log(`Inserted new user with uuid: ${userId}`)
  }

  console.log('User registered successfully:', userId)
  return new NextResponse('OK')
}
