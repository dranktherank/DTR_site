// app/api/register-guest/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST() {
  const cookieStore = cookies()
  const userId = cookieStore.get('user_id')?.value

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

  // If they do, update their last_seen
  if (data && !error) {
    const { error: updateError } = await supabase
      .from('USER')
      .update({ last_seen: new Date() })
      .eq('uuid', userId)
    if (updateError) {
      console.error('Error updating user last_seen:', updateError.message)
      return new NextResponse(`Error updating user last_seen: ${updateError.message}`, { status: 500 })
    }
    else {
      console.log(`User with uuid: ${userId} last_seen updated`)
    }
  }

  // If the user doesn't exist, insert a new record with their cookie uuid
  if (!data && !error) {
    const { error: insertError, data: insertData } = await supabase
      .from('USER')
      .insert([{ uuid: userId }])

      if (insertError) {
        console.error('Insert error:', insertError.message)
        return new NextResponse(`Insert error: ${insertError.message}`, { status: 500 })
    }

    console.log(`New user inserted with uuid: ${userId}`)
  }

  return new NextResponse('OK')
}
