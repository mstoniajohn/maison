import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataObj } from '../users/userSlice'
import authService from './authService'

let user
if (typeof window !== 'undefined') {
  // Perform localStorage action
  let u: any = localStorage.getItem('user')
  user = JSON.parse(u)
}

const initialState: any = {
  user: user ?? null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  isAdmin: false,
  token: null,
  currentUser: null,
  refreshAccess: false,
}

export const register = createAsyncThunk(
  'auth/register',
  async ({ user }: { user: DataObj }, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error: any) {
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

export const login = createAsyncThunk(
  'auth/login',
  async ({ user }: { user: DataObj }, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error: any) {
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
export const verifyToken = createAsyncThunk(
  'auth/verify',
  async ({ token }: { token: DataObj }, thunkAPI) => {
    try {
      console.log(token)
      return await authService.verify(token)
    } catch (error: any) {
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

export const userInfo = createAsyncThunk(
  'auth/userInfo',
  async (_: void, thunkAPI) => {
    try {
      return await authService.userInfo()
    } catch (error: any) {
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
export const emailPasswordReset = createAsyncThunk(
  'auth/sentResetPassword',
  async ({ email }: { email: DataObj }, thunkAPI) => {
    try {
      return await authService.sendResetPasswordEmail(email)
    } catch (error: any) {
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

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ data }: { data: DataObj }, thunkAPI) => {
    try {
      return await authService.resetPassword(data)
    } catch (error: any) {
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

export const checkAdminStatus = createAsyncThunk(
  'auth/isAdmin',
  async ({ token }: { token: string }, thunkAPI) => {
    try {
      return await authService.isAdmin(token)
    } catch (error: any) {
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

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async ({ refresh }: { refresh: string }, thunkAPI) => {
    try {
      return await authService.refreshAccessToken(refresh)
    } catch (error: any) {
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

export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout()
})

export const activate = createAsyncThunk(
  'auth/activate',
  async ({ user }: { user: DataObj }, thunkAPI) => {
    try {
      return await authService.activate(user)
    } catch (error: any) {
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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
      state.currentUser = null
      return state
    },
    resetUserToken: (state, { payload }) => {
      state.user = payload
      return state
    },
    logoutUser: (state) => {
      state.currentUser = null
      return state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
    //
    builder
      .addCase(verifyToken.pending, (state) => {
        state.isLoading = true
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.refreshAcces = false
        console.log(action.payload)
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true

        state.refreshAccess = true

        // state.message = action.payload

        state.user = null
      })
    //
    builder
      .addCase(emailPasswordReset.pending, (state) => {
        state.isLoading = true
      })
      .addCase(emailPasswordReset.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // state.user = action.payload
      })
      .addCase(emailPasswordReset.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
    //

    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      // state.user = action.payload
    })
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    //
    builder.addCase(checkAdminStatus.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(checkAdminStatus.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isAdmin = action.payload
    })
    builder.addCase(checkAdminStatus.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.isAdmin = false
    })
    //

    //
    builder.addCase(userInfo.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userInfo.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.currentUser = action.payload
    })
    builder.addCase(userInfo.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      // state.isAdmin = false
    })
    //
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    builder.addCase(refreshToken.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.token = action.payload.access
      // state.user.access = action.payload.access
    })
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.token = null
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null
    })
    builder.addCase(activate.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(activate.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
    })
    builder.addCase(activate.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
  },
})

export const { reset, resetUserToken, logoutUser } = authSlice.actions

export default authSlice.reducer
