import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { ContentfulClientApi, createClient } from 'contentful'

export interface BlogState {
  blogs: any[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
  djangoBlogs: any[]
  singleBlog: any
}

const initialState: BlogState = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  djangoBlogs: [],
  singleBlog: {},

  // darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
}

const client: ContentfulClientApi = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || '',
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
})

// Get user goals
export const getBlogs = createAsyncThunk(
  'blog/getAll',
  async (_: void, thunkAPI) => {
    try {
      const res = await client.getEntries({ content_type: 'blog' })
      const items = res.items
      return items
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const getDjangoBlogs = createAsyncThunk(
  'blogs/getAll',
  async (_: void, thunkAPI) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/`)
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const getSingleBlog = createAsyncThunk(
  'blog/single',
  async ({ slug }: { slug: string }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`
      )
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.blogs = action.payload
    })
    builder.addCase(
      getBlogs.rejected,
      (state: BlogState, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }
    )
    //
    builder.addCase(getDjangoBlogs.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getDjangoBlogs.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.djangoBlogs = action.payload?.filter((blog: any) => !blog?.draft)
    })
    builder.addCase(
      getDjangoBlogs.rejected,
      (state: BlogState, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }
    )
    //
    builder.addCase(getSingleBlog.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getSingleBlog.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.singleBlog = action.payload
    })
    builder.addCase(
      getSingleBlog.rejected,
      (state: BlogState, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }
    )
  },
})

const { reducer, actions } = blogSlice

// A small helper of user state for `useSelector` function.
export const getBlogState = (state: { blogs: BlogState }) => state.blogs
export default reducer
