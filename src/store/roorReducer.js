import { configureStore } from '@reduxjs/toolkit'
import notificationSlice   from './reducers/notificationSlice'
import userSlice from './reducers/userSlice'
import doctorSlice from './reducers/doctorSlice'

export const store = configureStore({
    reducer: {
      notification: notificationSlice,
      user:userSlice,
      doctorInfo:doctorSlice
    },
  })
  