import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import {
  loginUser,
  getUserInfo,
  logoutUser,
  LoginCredentials,
  UserInfo,
} from '@/api/auth'

/**
 * Hook for user login
 * @returns Mutation object for login
 */
export const useLogin = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => loginUser(credentials),
    onSuccess: (data) => {
      // Store user data in React Query cache
      queryClient.setQueryData(['user'], data)

      // Show success message
      toast.success('Successfully logged in')

      // Redirect to home page or the page specified in the query
      const redirectTo = (router.query.redirectTo as string) || '/'
      router.push(redirectTo)
    },
    onError: (error: Error) => {
      // Show error message
      toast.error(error.message || 'Login failed')
    },
    gcTime: 3 * 60 * 60 * 1000, // 3 hours
  })
}

/**
 * Hook for getting user information
 * @returns Query object for user info
 */
export const useUser = () => {
  // Check if access token exists in localStorage
  const hasAccessToken =
    typeof window !== 'undefined' && !!localStorage.getItem('accessToken')

  return useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
    retry: 1,
    staleTime: 3 * 60 * 60 * 1000, // 3 hours
    gcTime: 3 * 60 * 60 * 1000, // 3 hours
    enabled: hasAccessToken, // Only run the query if access token exists
  })
}

/**
 * Hook for user logout
 * @returns Mutation object for logout
 */
export const useLogout = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: () => {
      logoutUser()
      return Promise.resolve()
    },
    onSuccess: () => {
      // Clear user data from React Query cache
      queryClient.clear()

      // Show success message
      toast.success('Successfully logged out')

      // Redirect to login page
      router.push('/account/login')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Logout failed')
    },
  })
}

/**
 * Hook to check if user is authenticated
 * @returns Boolean indicating if user is authenticated
 */
export const useIsAuthenticated = () => {
  const { data: user, isLoading, error } = useUser()

  // Handle errors silently for authentication check
  if (error && !error.message.includes('No access token found')) {
    toast.error('Failed to load user information')
  }

  return {
    isAuthenticated: !!user,
    isLoading,
  }
}
