import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // These routes require authentication
  const protectedRoutes = [
    '/',
    '/menu',
    '/account',
    '/dashboard',
    '/profile',
    '/settings',
  ]

  // Check if the current route is in the protected routes list
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  )

  // If the route is not protected, allow the request
  if (!isProtectedRoute) {
    return NextResponse.next()
  }

  // Create a response with the current pathname
  const response = NextResponse.next()

  // Create Supabase client with the request and response objects
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: any) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Check if the user is authenticated
  const { data: { session } } = await supabase.auth.getSession()

  // If the user is not authenticated and the route is protected, redirect to sign in
  if (!session && isProtectedRoute) {
    const redirectUrl = new URL('/auth/signin', request.url)
    return NextResponse.redirect(redirectUrl)
  }

  return response
} 