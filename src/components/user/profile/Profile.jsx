import React, { useEffect, useState } from 'react'
import { useStyles } from './profileStyles'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useSelector } from 'react-redux';
import { getDoctorInfo } from '../../../services/doctor';
import { useParams } from 'react-router-dom';

export const Profile = () => {
    const classes = useStyles()
    const { user } = useSelector(state => state.user)
    const params = useParams()

    const [doctor, setDoctor] = useState("")

    useEffect(() => {
        doctorInfo()
    }, [])

    const doctorInfo = async () => {
        let res = await getDoctorInfo(user.token, params.id)
        setDoctor(res.doctor)
        // console.log(res, "info")
    }
    return (
        <>
            <Box component="section" className={classes.profileContainer}>
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Profile</Typography>
            </Box>
        </>
    )
}
