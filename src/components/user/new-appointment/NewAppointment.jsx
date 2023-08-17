import React, { useEffect } from 'react'
import { useStyles } from './newAppointmentStyles'
import { Box, Typography, TextField, Button } from '@mui/material'
import { getAllDoctors } from '../../../services/user'
import { useSelector, useDispatch } from 'react-redux';

export const NewAppointment = () => {
    const { user } = useSelector(state => state.user)
    const classes = useStyles()

    useEffect(() => {
        allDocs()
    }, [])

    const allDocs = async () => {
        let res = await getAllDoctors(user.token)
        console.log(res.allDoctors, "alldoc")
    }

    return (
        <>
            <Box component="section" className={classes.newAppointmentContainer}>
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Appointment</Typography>
                <Box component="section" >

                </Box>
            </Box>
        </>
    )
}
