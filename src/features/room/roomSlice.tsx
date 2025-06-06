import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface RoomState {
  rooms: any[]
  currentRoom: any
  fecthRooms: 'idle' | 'pending' | 'success' | 'failed'
  updateRoom: 'idle' | 'pending' | 'success' | 'failed'
  createRoom: 'idle' | 'pending' | 'success' | 'failed'
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
  openRoomForm: boolean
  openEditForm: boolean
}

const initialState: RoomState = {
  rooms: [],
  currentRoom: {},
  fecthRooms: 'idle',
  updateRoom: 'idle',
  createRoom: 'idle',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  openRoomForm: false,
  openEditForm: false,
}

export const fetchRooms = createAsyncThunk(
  'rooms/fetchRooms',
  async (_: void, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms/`
      )
      const data = await response.data
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// update a room
export const updateRoom = createAsyncThunk(
  'rooms/updateRoom',
  async (
    { data, pkid, token }: { data: any; pkid: number; token: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms/${pkid}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const resData = await response.data
      return resData
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// create room
export const createRoom = createAsyncThunk(
  'rooms/createRoom',
  async ({ data, token }: { data: any; token: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const resData = await response.data
      return resData
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    clearState: (state) => {
      ;(state.fecthRooms = 'idle'),
        (state.updateRoom = 'idle'),
        (state.isError = false)
      state.isSuccess = false
      state.isLoading = false
      state.message = ''
    },
    setCurrentRoom: (state, action: PayloadAction<any>) => {
      state.currentRoom = action.payload
    },
    setOpenRoomForm: (state, action: PayloadAction<boolean>) => {
      state.openRoomForm = action.payload
    },
    setOpenEditForm: (state, action: PayloadAction<boolean>) => {
      state.openEditForm = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, (state) => {
      state.fecthRooms = 'pending'
      state.isLoading = true
    })
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.fecthRooms = 'success'
      state.isLoading = false
      state.isSuccess = true
      state.rooms = action.payload
    })
    builder.addCase(fetchRooms.rejected, (state, action) => {
      state.fecthRooms = 'failed'
      state.isLoading = false
      state.isError = true
      state.message = action.payload as string
    })
    builder.addCase(updateRoom.pending, (state) => {
      state.updateRoom = 'pending'
      state.isLoading = true
    })
    builder.addCase(updateRoom.fulfilled, (state, action) => {
      state.updateRoom = 'success'
      state.isLoading = false
      state.isSuccess = true
      state.currentRoom = action.payload
    })
    builder.addCase(updateRoom.rejected, (state, action) => {
      state.updateRoom = 'failed'
      state.isLoading = false
      state.isError = true
      state.message = action.payload as string
    })
    builder.addCase(createRoom.pending, (state) => {
      state.createRoom = 'pending'
      state.isLoading = true
    })
    builder.addCase(createRoom.fulfilled, (state, action) => {
      state.createRoom = 'success'
      state.isLoading = false
      state.isSuccess = true
      state.currentRoom = action.payload
    })
    builder.addCase(createRoom.rejected, (state, action) => {
      state.createRoom = 'failed'
      state.isLoading = false
      state.isError = true
      state.message = action.payload as string
    })
  },
})
const { clearState, setCurrentRoom, setOpenRoomForm, setOpenEditForm } =
  roomSlice.actions
export { clearState, setCurrentRoom, setOpenRoomForm, setOpenEditForm }
export default roomSlice.reducer
