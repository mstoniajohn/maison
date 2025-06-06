import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface InstaState {
  instaPosts: any
  isntaPostsNext: any[]
  paging: string
  nextData: any
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
  data: any
}

const initialState: InstaState = {
  instaPosts: null,
  isntaPostsNext: [],
  paging: '',
  nextData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  data: null,
}

// Get user goals
export const getInstaPosts = createAsyncThunk('insta/getAll', async () => {
  const res = await axios.get(
    `https://graph.instagram.com/me/media?fields=id,media_type,permalink,media_url,caption&limit=20&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
  )

  const { data, paging } = await res.data
  const nextRes = await axios.get(paging?.next)
  const nextData = await nextRes.data.data

  return { data, paging, nextData }
})

export const instagramSlice = createSlice({
  name: 'instagram',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInstaPosts.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.instaPosts = action.payload.data
    }),
      builder.addCase(getInstaPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        // state.message = action.payload
      }),
      builder.addCase(getInstaPosts.pending, (state) => {
        state.isLoading = true
      })
  },
})

const { reducer, actions } = instagramSlice
export default reducer
