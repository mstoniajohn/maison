import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import NegrilPassword from '../../utils/helpers'
import { apiConfig, axiosApiInstance } from '@/components/api/axiosApi'
import axios from 'axios'

export interface PressItem {
  metadata: {
    tags: any[]
  }
  sys: {
    space: {
      typ: string
      linkType: string
      id: string
    }
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: {}
    revision: number
    contentType: {}
    locale: string
  }
  fields: {
    title: string
    subtitle: string
    url: string
    date: string
    text: any
    image: {
      field: {
        description: string
        title: string
        file: any
      }
    }
  }
}

export interface PressState {
  negrilGuides?: any[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: any
  currentCard: any
  negrilPassword: string | null
  guideSections?: any[]
  createGuideState: 'idle' | 'pending' | 'success' | 'error'
  sectionState: 'idle' | 'pending' | 'success' | 'error'
  deleteGuideState: 'idle' | 'pending' | 'success' | 'error'
  showPassword: boolean
}
const initialState: PressState = {
  negrilGuides: [],
  guideSections: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
  currentCard: null,
  negrilPassword: '',
  createGuideState: 'idle',
  sectionState: 'idle',
  deleteGuideState: 'idle',
  showPassword: false,
  // darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
}

// Get user goals
export const getPress = createAsyncThunk('presss/getAll', async () => {
  return true
})

// Get negril guides
export const getNegrilGuides = createAsyncThunk(
  'guides/all',
  async (_: void, thunkAPI: any) => {
    const config = apiConfig('application/json')
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/negril_guide/`
      )
      return res.data
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
// Create negril guide
export const createNegrilGuide = createAsyncThunk(
  'guide/create',
  async ({ data, token }: { data: any; token?: string }, thunkAPI: any) => {
    const config = apiConfig('multipart/form-data', token)
    try {
      const res = await axios.post(`/negril_guide/`, data, config)
      return res.data
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
// Delete negril guide
export const deleteNegrilGuide = createAsyncThunk(
  'guide/delete',
  async ({ id, token }: { id: any; token: string }, thunkAPI: any) => {
    const config = apiConfig('application/json', token)
    try {
      const res = await axios.delete(`/negril_guide/${id}/`, config)
      return res.data
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
// Create negril guide
export const editNegrilGuide = createAsyncThunk(
  'guide/edit',
  async (
    { data, id, token }: { data: any; id: any; token?: string },
    thunkAPI: any
  ) => {
    const config = apiConfig('multipart/form-data', token)
    console.log(config)
    try {
      const res = await axios.patch(`/negril_guide/${id}/`, data, config)
      return res.data
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

// Create negril guide
export const editGuideSection = createAsyncThunk(
  'guideSection/edit',
  async (
    { data, id, token }: { data: any; id: any; token: string },
    thunkAPI: any
  ) => {
    const config = apiConfig('multipart/form-data', token)
    try {
      const res = await axios.patch(`/guide_section/${id}/`, data, config)
      return res.data
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

// Get sections
// Get negril guides
export const getNegrilGuideSections = createAsyncThunk(
  'guide_sections/all',
  async (_: void, thunkAPI: any) => {
    const config = apiConfig('application/json')
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/guide_section/`
      )
      return res.data
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

export const negrilSlice = createSlice({
  name: 'negril',
  initialState,
  reducers: {
    setShowPassword: (state, { payload }) => {
      state.showPassword = payload
      return state
    },
    setCurrentCard: (state, { payload }) => {
      state.currentCard = payload
      return state
    },
    getNegrilPassword: (state) => {
      const password = NegrilPassword.getPassword()
      state.negrilPassword = password
      return state
    },
    setNegrilPassword: (state, { payload }) => {
      state.negrilPassword = payload.password
      return state
    },
  },
  extraReducers: (builder) => {
    // getNegrilGuides
    builder.addCase(getNegrilGuides.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(getNegrilGuides.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.negrilGuides = action.payload
      }),
      builder.addCase(getNegrilGuides.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
    // create
    builder.addCase(createNegrilGuide.pending, (state) => {
      state.isLoading = true
      state.createGuideState = 'pending'
    }),
      builder.addCase(createNegrilGuide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.createGuideState = 'success'
        // state.message = action.payload
      }),
      builder.addCase(createNegrilGuide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.createGuideState = 'error'
      })
    // edit
    builder.addCase(editNegrilGuide.pending, (state) => {
      state.isLoading = true
      state.createGuideState = 'pending'
    }),
      builder.addCase(editNegrilGuide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.createGuideState = 'success'
        // state.message = action.payload
      }),
      builder.addCase(editNegrilGuide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.createGuideState = 'error'
      })

    // delete guide
    builder.addCase(deleteNegrilGuide.pending, (state) => {
      state.isLoading = true
      state.deleteGuideState = 'pending'
    }),
      builder.addCase(deleteNegrilGuide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.deleteGuideState = 'success'
      }),
      builder.addCase(deleteNegrilGuide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.deleteGuideState = 'error'
      })

    // edit section
    builder.addCase(editGuideSection.pending, (state) => {
      state.isLoading = true
      state.sectionState = 'pending'
    }),
      builder.addCase(editGuideSection.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sectionState = 'success'
        // state.message = action.payload
      }),
      builder.addCase(editGuideSection.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.sectionState = 'error'
      })
    builder.addCase(getPress.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(getPress.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // state.press = action.payload
      }),
      builder.addCase(getPress.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        //  state.message = action.payload
      })
    // getNegrilGuideSection
    builder.addCase(getNegrilGuideSections.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(getNegrilGuideSections.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guideSections = action.payload
      }),
      builder.addCase(getNegrilGuideSections.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        // state.message = action.payload
      })
  },
})
const { actions, reducer } = negrilSlice

export default reducer
export const {
  setCurrentCard,
  getNegrilPassword,
  setNegrilPassword,
  setShowPassword,
} = actions
