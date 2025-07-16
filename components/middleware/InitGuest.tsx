'use client'

import { useEffect } from 'react'

export default function InitGuest() {
  useEffect(() => {
    fetch('/api/register-guest', {
      method: 'POST',
      credentials: 'same-origin',
    })
  }, [])

  return null
}
