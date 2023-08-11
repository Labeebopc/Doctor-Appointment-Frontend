import { configureStore } from '@reduxjs/toolkit'
import notificationSlice   from './reducers/alertSlice'
import userSlice from './reducers/userSlice'

export const store = configureStore({
    reducer: {
      notification: notificationSlice,
      user:userSlice
    },
  })
  