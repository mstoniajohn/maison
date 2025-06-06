import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'

import { DEFAULT_PASSWORD } from '../../utils/constants'
import authService from '../auth/authService'
import { auth } from '@/firebase'

const provider = new GoogleAuthProvider()

export type DataObj = {
  [key: string]: any
}

export interface UserState {
  user: DataObj
  users: DataObj[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
  status: string
}

const initialState: UserState = {
  user: {},
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  status: '',
}
export const logOutUser = createAsyncThunk(
  'user/logout',
  async (_: void, thunkAPI) => {
    try {
      const res: any = await signOut(auth)
      const data = await res.json()

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// Get user goals
export const loginUser = createAsyncThunk(
  'user/Login',
  async (_: void, thunkAPI) => {
    try {
      const result: any = await signInWithPopup(auth, provider)
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      // The signed-in user info.
      const djangoUsers = await authService.fetchAllUsers()

      const isExisting = djangoUsers.filter(
        (user: DataObj) => user.email === result.user.email
      )
      if (isExisting?.length === 0) {
        const [first, last]: any = result.user?.displayName?.split(' ')
        await authService.register({
          email: result.user.email,
          username: result.user.email,
          first_name: first,
          last_name: last,
          password: DEFAULT_PASSWORD,
          re_password: DEFAULT_PASSWORD,
        })
      }
      //else {
      //   await authService.login({
      //     email: result.user.email,
      //     password: DEFAULT_PASSWORD,
      //   })
      // }
      return result.user
    } catch (error: any) {
      // Handle Errors here.
      // const errorCode = error?.code
      // const errorMessage = error?.message
      // // The email of the user's account used.
      // const email = error.customData.email
      // // The AuthCredential type that was used.
      // const credential =
      //   GoogleAuthProvider.credentialFromError(error)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    builder.addCase(
      loginUser.rejected,
      (state: UserState, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }
    )
    //
    builder.addCase(logOutUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = {}
    })
    builder.addCase(
      logOutUser.rejected,
      (state: UserState, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }
    )
  },
})

const { reducer, actions } = userSlice

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user
export default reducer
