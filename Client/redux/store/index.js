import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'
import counterReducer from '../actions/index'

export const store = configureStore({
  reducer: {
    loader: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: true,}).concat(logger),
})