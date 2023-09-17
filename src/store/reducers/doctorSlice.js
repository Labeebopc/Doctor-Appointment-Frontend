import { createSlice } from "@reduxjs/toolkit"


export const doctorSlice = createSlice({
    name: "doctorInfo",
    initialState: {
        doctorInfo: null
    },
    reducers: {
        setDoctorInfo: (state, action) => {
            state.doctorInfo = action.payload
        }
    }
})

export const { setDoctorInfo } = doctorSlice.actions

export default doctorSlice.reducer