import React, { useState } from 'react'
import { useStyles } from './applyDoctorStyles'
import { Box, Typography, TextField, Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';
import { applyDoctor } from '../../../services/admin';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


export const ApplyDoctor = () => {

    const classes = useStyles()
    const { user } = useSelector(state => state.user)
    console.log(user.token)
    const dispatch = useDispatch()
    const [applyDoctorDetails, setApplyDoctorDetails] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        specialization: "",
        consultationFee: "",
        timing: ""
    })

    const handleTimingChange = (time) => {
        console.log(time)
        setApplyDoctorDetails({ ...applyDoctorDetails, timing: time?.target?.value })
    }

    const handleSubmit = async () => {
        if (applyDoctorDetails.firstName === "" || applyDoctorDetails.firstName === "" || applyDoctorDetails.firstName === "" ||
            applyDoctorDetails.firstName === "" || applyDoctorDetails.firstName === "" || applyDoctorDetails.firstName === "" ||
            applyDoctorDetails.firstName === "" || applyDoctorDetails.firstName === "") {
            toast.error("Please fill all mandotary fields!")
        }
        else {
            let res = await applyDoctor(user.token, { ...applyDoctorDetails, userId: user.existingUser._id })
            console.log(res)
            if (res?.status) {
                toast.success(res?.message)
                setApplyDoctorDetails({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    password: "",
                    address: "",
                    specialization: "",
                    consultationFee: "",
                    timing: ""
                })
            }
            else {
                toast.error(res)
            }
        }

    }

    const handleReset = () => {
        setApplyDoctorDetails({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            address: "",
            specialization: "",
            consultationFee: "",
            timing: ""
        })
    }
    return (
        <>
            <Box component="section" className={classes.applyDoctorContainer}>
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Apply Doctor</Typography>
                <Box component="form" autoComplete="off" className={classes.form}>
                    <Box component="article" className={classes.formRows}>
                        <TextField type='text' className={classes.inputs} label="First Name" variant="outlined"
                            onChange={(e) => setApplyDoctorDetails({ ...applyDoctorDetails, firstName: e.target.value })} required
                            value={applyDoctorDetails.firstName} />
                        <TextField type='text' className={classes.inputs} label="Last Name" variant="outlined"
                            onChange={(e) => setApplyDoctorDetails({ ...applyDoctorDetails, lastName: e.target.value })} required
                            value={applyDoctorDetails.lastName} />
                    </Box>

                    <Box component="article" className={classes.formRows}>
                        <TextField className={classes.inputs} label="Phone" variant="outlined"
                            onChange={(e) => setApplyDoctorDetails({ ...applyDoctorDetails, phone: e.target.value })} required
                            value={applyDoctorDetails.phone} />
                        <TextField type='email' className={classes.inputs} label="Email" variant="outlined"
                            onChange={(e) => setApplyDoctorDetails({ ...applyDoctorDetails, email: e.target.value })} required
                            value={applyDoctorDetails.email} />
                    </Box>

                    <Box component="article" className={classes.formRows}>
                        <TextField type='password' className={classes.inputs} label="Password" variant="outlined"
                            onChange={(e) => setApplyDoctorDetails({ ...applyDoctorDetails, password: e.target.value })} required
                            value={applyDoctorDetails.password} />
                        <TextField type='text' className={classes.inputs} label="Address" variant="outlined"
                            onChange={(e) => setApplyDoctorDetails({ ...applyDoctorDetails, address: e.target.value })}
                            value={applyDoctorDetails.address} />
                    </Box>

                    <Box component="article" className={classes.formRows}>
                        <TextField type='text' className={classes.inputs} label="Specialization" variant="outlined"
                            onChange={(e) => setApplyDoctorDetails({ ...applyDoctorDetails, specialization: e.target.value })} required
                            value={applyDoctorDetails.specialization} />
                        <TextField className={classes.inputs} label="Consultation Fee" variant="outlined"
                            onChange={(e) => setApplyDoctorDetails({ ...applyDoctorDetails, consultationFee: e.target.value })}
                            required inputProps={{ min: 0 }}
                            value={applyDoctorDetails.consultationFee} />
                    </Box>
                    <Box component="article" className={classes.formRows}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <SingleInputTimeRangeField
                                label="From - To"
                                // value={}
                                onChange={(e) => handleTimingChange(e)} // Pass the onChange event handler to the component
                            />
                        </LocalizationProvider>

                    </Box>
                </Box>
                <Box component="section" className={classes.buttonSection} >
                    <Button variant="outlined" className={classes.button} onClick={handleReset}>Reset</Button>
                    <Button variant="contained" className={classes.button} onClick={handleSubmit} >Submit</Button>
                </Box>
            </Box>
        </>
    )
}
