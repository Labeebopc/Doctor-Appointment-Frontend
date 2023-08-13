import React from 'react'
import { useStyles } from './appointmentStyles'
import { Box, Typography, TextField, Button } from '@mui/material'

export const Appointment = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.appointmentContainer}>
            <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Appointment</Typography>
            </Box>
        </>
    )
}
