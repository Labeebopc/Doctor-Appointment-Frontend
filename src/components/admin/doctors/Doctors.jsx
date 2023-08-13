import React from 'react'
import { useStyles } from './doctorsStyles'
import { Box, Typography, TextField, Button } from '@mui/material'

export const Doctors = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.doctorsContainer}>
            <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>All Doctors</Typography>
            </Box>
        </>
    )
}
