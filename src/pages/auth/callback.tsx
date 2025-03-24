'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@/lib/supabase/client'

export default function AuthCallback() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { searchParams } = new URL(window.location.href)
      const code = searchParams.get('code')
      const error = searchParams.get('error')
      const errorDescription = searchParams.get('error_description')

      if (error) {
        console.error('Error in auth callback:', error, errorDescription)
        router.push('/auth/signin?error=' + encodeURIComponent(errorDescription || 'Authentication error'))
        return
      }

      if (code) {
        try {
          // Exchange code for session
          await supabase.auth.exchangeCodeForSession(code)
          router.push('/')
        } catch (err) {
          console.error('Error exchanging code for session:', err)
          router.push('/auth/signin?error=Failed to complete authentication')
        }
      } else {
        router.push('/auth/signin')
      }
    }

    handleAuthCallback()
  }, [router, supabase.auth])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Processing...</h2>
        <p className="text-gray-600">Please wait while we complete your authentication.</p>
      </div>
    </div>
  )
} 