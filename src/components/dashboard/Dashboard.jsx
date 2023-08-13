import React from 'react'
import { useStyles } from './dashboardStyles'
import { Box, Typography, TextField, Button } from '@mui/material'

export const Dashboard = () => {
    const classes = useStyles()
    return (
        <>
            <Box component="section" className={classes.dashboardContainer}>
                Work in progress !!
            </Box>
        </>
    )
}
