import axios from 'axios'
import { axiosApiInstance, setAuthToken } from '@/components/api/axiosApi'
import { resetUserToken } from './authSlice'
import { DataObj } from '../users/userSlice'

const REGISTER_URL = `/v1/auth/users/`
const LOGIN_URL = `/v1/auth/jwt/create/`
const ACTIVATE_URL = `/v1/auth/users/activation/`
const USER_URL = `/v1/auth/users/me/`
const ALL_USERS = `/users/all`
const REFRESH_URL = `/v1/auth/jwt/refresh/`
const VERIFY_TOKEN = `/v1/auth/jwt/verify/`

const ADMIN_STATUS_URL = `/check_status`
const SEND_RESET_PASSWORD_EMAIL = `/v1/auth/users/reset_password/`
const RESET_PASSWORD_CONFIRMATION_URL = `/v1/auth/users/reset_password_confirm/`
import api from '../api'

// Register user
const register = async (userData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await axiosApiInstance.post(REGISTER_URL, userData, config)
  localStorage.setItem('accessToken', JSON.stringify(response.data.access))
  // await api.get('/endpoint');
  localStorage.setItem('refreshToken', JSON.stringify(response.data.refresh))

  return response.data
}

// Login user

const login = async (userData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axiosApiInstance.post(LOGIN_URL, userData, config)
  // await api.post(LOGIN_URL, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    localStorage.setItem('accessToken', response.data.access)
    localStorage.setItem('refreshToken', response.data.refresh)
  }
  setAuthToken(response.data.access)
  return response.data
}
// Login user

const verify = async (userData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}${VERIFY_TOKEN}`,
    userData,
    config
  )
  // await api.post(
  //   `${process.env.NEXT_PUBLIC_API_URL}${VERIFY_TOKEN}`,
  //   userData,
  // )
  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data))
    console.log(response.data, userData)
  }
  // setAuthToken(response.data.access)
  return response.data
}
// Get user
const userInfo = async () => {
  // token: string | null
  const user = JSON.parse(localStorage.getItem('user') || '')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + user?.access,
    },
  }
  const response = await axiosApiInstance.get(USER_URL, config)

  return response.data
}

// set reset password email

const sendResetPasswordEmail = async (email: DataObj) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axiosApiInstance.post(
    SEND_RESET_PASSWORD_EMAIL,
    email,
    config
  )

  return response.data
}

// Reset Password
const resetPassword = async (data: DataObj) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axiosApiInstance.post(
    RESET_PASSWORD_CONFIRMATION_URL,
    data,
    config
  )

  return response.data
}

const isAdmin = async (token: string) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }
  const response = await axiosApiInstance.get(ADMIN_STATUS_URL, config)

  return response.data
}

const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

const activate = async (userData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axiosApiInstance.post(ACTIVATE_URL, userData, config)
  return response.data
}
const refreshAccessToken = async (refresh: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axiosApiInstance.post(REFRESH_URL, { refresh }, config)
  localStorage.removeItem('user')
  const user = {
    refresh: refresh,
    access: response.data.access,
  }

  localStorage.setItem('user', JSON.stringify(user))

  return response.data
}

// Register user
const fetchAllUsers = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await axiosApiInstance.get(ALL_USERS, config)
  return response.data
}

const authService = {
  register,
  login,
  logout,
  activate,
  fetchAllUsers,
  refreshAccessToken,
  isAdmin,
  userInfo,
  sendResetPasswordEmail,
  resetPassword,
  verify,
}

export default authService
