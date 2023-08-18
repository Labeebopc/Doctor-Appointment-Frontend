import React from 'react'
import { useStyles } from './adminsettingsStyles'
import { Box, Typography, TextField, Button } from '@mui/material'

export const AdminSettings = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.settingsContainer}>
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Settings</Typography>
            </Box>
        </>
    )
}
