import React from 'react'
import { useStyles } from './adminhomeStyles'
import { Box, Typography, TextField, Button } from '@mui/material'

export const AdminHome = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.homeContainer}>
            <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Home</Typography>
            </Box>
        </>
    )
}
