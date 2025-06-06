import { postApiData } from '@/utils/postApiData'
import { USER_URLS } from '@/components/api/urls'
import { getApiData } from '@/utils/getApiData'
export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  access: string
  refresh: string
}

export interface UserInfo {
  id: string
  email: string
  username: string
  first_name: string
  last_name: string
  full_name: string
  is_admin: boolean
  is_customer: boolean
  profile_photo: string
  phone_number: string
  city: string
  country: string
  gender: string
}

/**
 * Login user with email and password
 * @param credentials - User login credentials
 * @returns Promise with auth tokens
 */
export const loginUser = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  try {
    const response = await postApiData<LoginCredentials, AuthResponse>({
      endpoint: USER_URLS.LOGIN,
      data: credentials,
      isLogin: true,
    })

    // Store tokens in localStorage
    localStorage.setItem('accessToken', response.access)
    localStorage.setItem('refreshToken', response.refresh)

    return response
  } catch (error) {
    // Handle specific error cases from Django backend
    if (error instanceof Error) {
      if (
        error.message.includes('No active account found') ||
        error.message.includes('Invalid credentials')
      ) {
        throw new Error('Invalid email or password')
      }
    }
    throw error
  }
}

/**
 * Get user information using the access token
 * @returns Promise with user information
 */
export const getUserInfo = async (): Promise<UserInfo> => {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    throw new Error('No access token found')
  }

  try {
    const response = await getApiData<UserInfo>({
      endpoint: USER_URLS.GET_USER_INFO,
      accessToken,
      useToken: true,
    })

    return response
  } catch (error) {
    if (error instanceof Error && error.message.includes('401')) {
      // Token might be expired, try to refresh it
      try {
        await refreshAccessToken()
        // Retry the request with the new token
        const newAccessToken = localStorage.getItem('accessToken')
        if (newAccessToken) {
          return await postApiData<Record<string, never>, UserInfo>({
            endpoint: USER_URLS.GET_USER_INFO,
            data: {},
            accessToken: newAccessToken,
          })
        }
      } catch (refreshError) {
        // If refresh fails, logout the user
        logoutUser()
      }
    }
    throw error
  }
}

/**
 * Refresh the access token using the refresh token
 * @returns Promise with new access token
 */
export const refreshAccessToken = async (): Promise<AuthResponse> => {
  const refreshToken = localStorage.getItem('refreshToken')

  if (!refreshToken) {
    throw new Error('No refresh token found')
  }

  try {
    const response = await postApiData<{ refresh: string }, AuthResponse>({
      endpoint: USER_URLS.REFRESH,
      data: { refresh: refreshToken },
    })

    // Update the access token in localStorage
    localStorage.setItem('accessToken', response.access)

    return response
  } catch (error) {
    // If refresh fails, logout the user
    logoutUser()
    throw error
  }
}

/**
 * Logout user and clear all tokens
 */
export const logoutUser = (): void => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('user')
}
