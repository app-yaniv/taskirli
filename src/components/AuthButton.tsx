import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AuthButton() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user || null)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase.auth])

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/auth/signin')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Truncate email for display
  const displayEmail = (email: string) => {
    if (email && email.length > 20) {
      return email.substring(0, 17) + '...'
    }
    return email
  }

  if (loading) {
    return <div className="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
  }

  if (!user) {
    return (
      <Link 
        href="/auth/signin" 
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
      >
        Sign In
      </Link>
    )
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        <span>{displayEmail(user.email)}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-xl z-10">
          <Link
            href="/account"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            My Account
          </Link>
          <button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
} 