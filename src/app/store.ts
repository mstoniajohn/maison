import { configureStore } from '@reduxjs/toolkit'

import pressReducer from '@/features/press/pressSlice'
import blogReducer from '@/features/blog/blogSlice'
import instagramReducer from '@/features/instagram/instagramSlice'
import userReducer from '@/features/users/userSlice'
import negrilReducer from '@/features/negril/negrilSlice'
import authReducer from '@/features/auth/authSlice'
import imageReducer from '@/features/images/ImageSlice'
import { persistReducer, persistStore } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import roomReducer from '@/features/room/roomSlice'

import {
  TypedUseSelectorHook,
  useDispatch,
  useDispatch as useDispatchBase,
  useSelector,
  useSelector as useSelectorBase,
} from 'react-redux'

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducers = combineReducers({
  press: pressReducer,
  blogs: blogReducer,
  instagram: instagramReducer,
  users: userReducer,
  negril: negrilReducer, //
  auth: authReducer,
  images: imageReducer,
  rooms: roomReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch

// Since we use typescript, lets utilize `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
