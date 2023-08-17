import React, { useEffect, useState } from 'react'
import { useStyles } from './userHomeStyles'
import { Box, Typography, TextField, Button } from '@mui/material'
import { getAllDoctors } from '../../../services/user'
import { useSelector, useDispatch } from 'react-redux';
import { DoctorList } from '../doctor-list/DoctorList';

export const UserHome = () => {
    const classes = useStyles()
    const { user } = useSelector(state => state.user)

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        allDocs()
    }, [])

    const allDocs = async () => {
        let res = await getAllDoctors(user.token)
        setDoctors(res.allDoctors)
        // console.log(res.allDoctors, "alldoc")
    }
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
