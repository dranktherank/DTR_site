'use client'

import React, { useEffect, useState } from 'react'

export default function CUST_ID_P_TAG() {
  const [userId, setUserId] = useState('')

  useEffect(() => {
    async function fetchUserId() {
      try {
        const res = await fetch('/api/guest-info')
        if (!res.ok) {
          console.error('Failed to fetch user_id:', res.statusText)
          return
        }
        const data = await res.json()
        setUserId(data.user_id)
      } catch (error) {
        console.error('Error fetching user_id:', error)
      }
    }

    fetchUserId()
  }, [])
  
  return <p>{userId || '... ... ... ... ...'}</p>
}

