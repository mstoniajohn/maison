import axios, { AxiosError, AxiosRequestConfig } from 'axios'

/**
 * Interface for postApiData parameters
 */
interface PostApiDataParams<T> {
  endpoint: string
  data: T
  queryParams?: Record<string, string>
  isFormData?: boolean
  accessToken?: string
  isLogin?: boolean
}

/**
 * Posts data to the Django backend API
 * @param params - Object containing all parameters for the API request
 * @returns Promise with the response data
 */
export async function postApiData<T = any, R = any>({
  endpoint,
  data,
  queryParams,
  isFormData = false,
  accessToken,
  isLogin = false,
}: PostApiDataParams<T>): Promise<R> {
  // Ensure endpoint starts with a slash if not provided
  const formattedEndpoint = endpoint
  console.log(formattedEndpoint)

  // Base URL with API path
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
  let url = `${baseUrl}${formattedEndpoint}`

  // Add query parameters if they exist
  if (queryParams && Object.keys(queryParams).length > 0) {
    const params = new URLSearchParams()
    Object.entries(queryParams).forEach(([key, value]) => {
      params.append(key, value)
    })
    url = `${url}?${params.toString()}`
  }

  // Configure request headers
  let headers: Record<string, string> = {}
  if (!isFormData) {
    headers['Content-Type'] = 'application/json'
  }
  const config: AxiosRequestConfig = {
    headers,
  }

  // Add authorization header if access token is provided
  if (isLogin) {
    config.headers = {
      ...config.headers,
    }
  } else if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    }
  } else {
    throw new Error('Authentication required: No access token provided')
  }

  try {
    const response = await axios.post(url, data, config)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError

    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Server responded with error:', axiosError.response.data)
      throw new Error(
        `Server error: ${axiosError.response.status} - ${JSON.stringify(
          axiosError.response.data
        )}`
      )
    } else if (axiosError.request) {
      // The request was made but no response was received
      console.error('No response received:', axiosError.request)
      throw new Error('No response received from server')
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', axiosError.message)
      throw new Error(`Request setup error: ${axiosError.message}`)
    }
  }
}
