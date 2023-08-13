import React from 'react'
import { useStyles } from './profileStyles'
import { Box, Typography, TextField, Button } from '@mui/material'

export const Profile = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.profileContainer}>
            <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Profile</Typography>
            </Box>
        </>
    )
}
