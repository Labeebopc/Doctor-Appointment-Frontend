import { createSlice } from "@reduxjs/toolkit"


export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        notification: 0
    },
    reducers: {
        setNotification: (state, action) => {
            state.notification = action.payload
        }
    }
})

export const { setNotification } = notificationSlice.actions

export default notificationSlice.reducer