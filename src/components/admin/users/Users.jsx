import React from 'react'
import { useStyles } from './usersStyles'
import { Box, Typography, TextField, Button } from '@mui/material'

export const Users = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.usersContainer}>
            <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Users</Typography>
            </Box>
        </>
    )
}
