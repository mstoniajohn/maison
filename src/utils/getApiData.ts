import axios, { AxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'

interface GetApiDataOptions {
  endpoint: string
  params?: Record<string, any>
  accessToken?: string
  headers?: Record<string, any>
  useToken?: boolean
}

interface PostApiDataOptions extends GetApiDataOptions {
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  data?: any
}

/**
 * Fetches data from an API endpoint using GET method
 * @param options - Configuration options for the API request
 * @returns Promise with the response data
 */
export const getApiData = async <T>({
  endpoint,
  params = {},
  accessToken,
  headers = {},
  useToken = false,
}: GetApiDataOptions): Promise<T> => {
  console.log('endpoint', endpoint)
  try {
    const config: AxiosRequestConfig = {
      params,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
    let url = `${baseUrl}${endpoint}`
    console.log(baseUrl)

    // Add authorization header if access token is provided
    if (useToken && accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }

    const response = await axios.get<T>(url, config)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle specific HTTP error codes
      if (error.response) {
        const status = error.response.status
        const errorData = error.response.data as any

        if (status === 401) {
          throw new Error('Unauthorized: Please log in again')
        } else if (status === 403) {
          throw new Error(
            'Forbidden: You do not have permission to access this resource'
          )
        } else if (status === 404) {
          toast.error('Resource not found')
          throw new Error('Resource not found')
        } else if (status >= 500) {
          throw new Error('Server error: Please try again later')
        } else if (errorData?.detail) {
          throw new Error(errorData.detail)
        }
      }

      // Network errors
      if (error.request && !error.response) {
        throw new Error('Network error: Please check your connection')
      }

      throw new Error(error.message || 'An error occurred while fetching data')
    }

    // For non-Axios errors
    throw error instanceof Error
      ? error
      : new Error('An unknown error occurred')
  }
}

/**
 * Makes a POST/PUT/PATCH/DELETE request to an API endpoint
 * @param options - Configuration options for the API request
 * @returns Promise with the response data
 */
export const postApiData = async <T>({
  endpoint,
  method = 'POST',
  data = {},
  accessToken,
  headers = {},
  useToken = false,
}: PostApiDataOptions): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
    let url = `${baseUrl}${endpoint}`

    // Add authorization header if access token is provided
    if (useToken && accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }

    let response
    switch (method) {
      case 'POST':
        response = await axios.post<T>(url, data, config)
        break
      case 'PUT':
        response = await axios.put<T>(url, data, config)
        break
      case 'PATCH':
        response = await axios.patch<T>(url, data, config)
        break
      case 'DELETE':
        response = await axios.delete<T>(url, config)
        break
      default:
        throw new Error(`Unsupported HTTP method: ${method}`)
    }

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle specific HTTP error codes
      if (error.response) {
        const status = error.response.status
        const errorData = error.response.data as any

        if (status === 401) {
          throw new Error('Unauthorized: Please log in again')
        } else if (status === 403) {
          throw new Error(
            'Forbidden: You do not have permission to access this resource'
          )
        } else if (status === 404) {
          throw new Error('Resource not found')
        } else if (status >= 500) {
          throw new Error('Server error: Please try again later')
        } else if (errorData?.detail) {
          throw new Error(errorData.detail)
        }
      }

      // Network errors
      if (error.request && !error.response) {
        throw new Error('Network error: Please check your connection')
      }

      throw new Error(
        error.message || 'An error occurred while making the request'
      )
    }

    // For non-Axios errors
    throw error instanceof Error
      ? error
      : new Error('An unknown error occurred')
  }
}
