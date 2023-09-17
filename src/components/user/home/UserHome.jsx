import React, { useEffect, useState } from 'react'
import { useStyles } from './userHomeStyles'
import { Box, Typography } from '@mui/material'
import { getAllDoctors } from '../../../services/user'
import { useDispatch, useSelector } from 'react-redux';
import { DoctorList } from '../doctor-list/DoctorList';
import { useLocation } from 'react-router-dom';
import { getDoctorInfo } from '../../../services/doctor';
import { setDoctorInfo } from '../../../store/reducers/doctorSlice';

export const UserHome = () => {
    const classes = useStyles()
    const { user } = useSelector(state => state.user)
    const location = useLocation()
    const dispatch = useDispatch()

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        allDocs()
    }, [])

    const allDocs = async () => {
        let res = await getAllDoctors(user.token)
        setDoctors(res?.allDoctors)
        // console.log(res.allDoctors, "alldoc")
    }

    // useEffect(() => {
    //     doctorInfo()
    // }, [])

    // const doctorInfo = async () => {
    //     if (location.pathname === "/doctor") {
    //         let res = await getDoctorInfo(user.token,user.existingUser._id)
    //         dispatch(setDoctorInfo(res.doctor))
    //     }
    // }

    return (
        <>
            <Box component="section" className={classes.homeContainer}>
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Home</Typography>

                <Box component="section" className={classes.cardSection}>
                    {
                        doctors?.map(docs => (
                            <>
                                <DoctorList doctrs={docs} />
                            </>
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}
