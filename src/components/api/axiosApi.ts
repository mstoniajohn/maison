import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosResponseHeaders,
} from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean
    baseURL?: string
  }
}

// const user =
//   typeof window !== 'undefined' &&
//   JSON.parse(window.localStorage.getItem('user') || '')

export const axiosApiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${user?.token || ''}`,
  },
})

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}
export const apiConfig = (type: string, token?: any) => ({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': type,
    Authorization: `Bearer ${token || ''}`,
  },
})
