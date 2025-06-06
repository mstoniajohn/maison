import { useMutation, useQueryClient } from '@tanstack/react-query'
import { USER_URLS } from './urls'

interface UserInfo {
  admin: boolean
  city: string
  country: string
  email: string
  first_name: string
  full_name: string
  gender: string
  id: string
  is_admin: boolean
  is_customer: boolean
  last_name: string
  phone_number: string
  profile_photo: string
  username: string
}
interface LoginData {
  email: string
  password: string
}

const loginUser = async (
  userData: LoginData
): Promise<{ access: string; refresh: string }> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${USER_URLS.LOGIN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }
  )
  if (!response.ok) {
    console.log(response)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data
}

const getUserInfo = async (): Promise<UserInfo> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${USER_URLS.GET_USER_INFO}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    }
  )
  if (!response.ok) {
    console.log(response)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data
}

const useLoginUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: loginUser,
    mutationKey: ['user_login'],
    onSuccess: (
      data: { access: string; refresh: string },
      variables,
      context
    ) => {
      queryClient.setQueryData(['user_info'], () => data)
      localStorage.setItem('access_token', data.access)
      localStorage.setItem('refresh_token', data.refresh)
    },
    onError: (error, variables, context) => {
      console.log(error)
    },
  })
}

const useGetUserInfo = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: getUserInfo,
    mutationKey: ['user_info'],
    onSettled: (data) => {
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data))
    },
    onError: (error, variables, context) => {
      console.log(error)
    },
    onSuccess: (data: UserInfo, variables, context) => {
      console.log(data)
      queryClient.setQueryData(['user_info'], data)
    },
  })
}

export { useLoginUser, useGetUserInfo }
