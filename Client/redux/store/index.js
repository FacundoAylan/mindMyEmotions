import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '..//slice/index'

export const store = configureStore({
  reducer: {
    loader: counterReducer,
  },
})