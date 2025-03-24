import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function MenuPage() {
  const supabase = createClient()
  
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    redirect('/auth/signin')
  }
  
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
          <h1 className="text-2xl font-semibold mb-6">Menu Page</h1>
          <p className="text-gray-600 mb-4">
            This is a placeholder for the Menu page. This page is protected and requires authentication.
          </p>
        </div>
      </div>
    </div>
  )
} 