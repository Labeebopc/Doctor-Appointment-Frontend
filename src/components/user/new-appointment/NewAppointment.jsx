import React from 'react'
import { useStyles } from './newAppointmentStyles'
import { Box, Typography, TextField, Button } from '@mui/material'

export const NewAppointment = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.newAppointmentContainer}>
            <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Appointment</Typography>
            </Box>
        </>
    )
}
