import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiConfig } from '@/components/api/axiosApi'

interface ImageState {
  images: string[]
  loading: boolean
  error: string | null
  imageStatus: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
  imageStatus: 'idle',
}

export const fetchImages = createAsyncThunk(
  'fetchImages',
  async (_: void, thunkAPI: any) => {
    //   dispatch(fetchImagesStart())
    const config = apiConfig('application/json')

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/images_upload/`
      )
      const data = await response.data
      return data
      // thunkAPI.dispatch(fetchImagesSuccess(response.data))
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // thunkAPI.dispatch(fetchImagesFailure(error.message))

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const createImage = createAsyncThunk(
  'createImages',
  async ({ data, token }: { data: any; token?: string }, thunkAPI: any) => {
    const config = apiConfig('multipart/form-data', token)

    // thunkAPI.dispatch(createImageStart())

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/images_upload/`,
        data,
        config
      )
      return response.data
      //   thunkAPI.dispatch(createImageSuccess(response.data))
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      //   thunkAPI.dispatch(createImageFailure(error.message))

      return thunkAPI.rejectWithValue(message)
    }
  }
)

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImageStatus(state, { payload }) {
      state.imageStatus = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state, action) => {
      state.loading = true
      state.error = null
      state.imageStatus = 'loading'
    })
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loading = false
      state.images = action.payload
      state.imageStatus = 'succeeded'
    })
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.loading = false
      //   state.error = action.payload
      state.imageStatus = 'failed'
    })
    builder.addCase(createImage.pending, (state, action) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(createImage.fulfilled, (state, action) => {
      state.loading = false
      state.images.push(action.payload)
    })
    builder.addCase(createImage.rejected, (state, action) => {
      state.loading = false
      //   state.error = action.payload
    })
  },
})

export const {
  setImageStatus,
  //   fetchImagesSuccess,
  //   fetchImagesFailure,
  //   createImageStart,
  //   createImageSuccess,
  //   createImageFailure,
} = imageSlice.actions

export default imageSlice.reducer
