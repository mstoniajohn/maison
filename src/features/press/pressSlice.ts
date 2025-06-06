import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { createClient } from 'contentful'
import { axiosApiInstance } from '@/components/api/axiosApi'

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
  press?: any[]
  pressDjango: any[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
}
const initialState: PressState = {
  press: [],
  pressDjango: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  // darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
}

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || '',
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
})

// Get user goals
export const getPress = createAsyncThunk('presss/getAll', async () => {
  const res = await client.getEntries({ content_type: 'press' })
  const items = await res.items

  return items
})

export const getDjangoPress = createAsyncThunk(
  'pressDjango/getAll',
  async () => {
    const res = await axiosApiInstance.get(`/press/`)

    return res.data
  }
)

export const pressSlice = createSlice({
  name: 'press',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPress.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(getPress.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.press = action.payload
      }),
      builder.addCase(getPress.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        //  state.message = action.payload
      })
    builder.addCase(getDjangoPress.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(getDjangoPress.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.pressDjango = action.payload
      }),
      builder.addCase(getDjangoPress.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        //  state.message = action.payload
      })
  },
})

// export const { getAchievement } = pressSlice.actions
export default pressSlice.reducer
