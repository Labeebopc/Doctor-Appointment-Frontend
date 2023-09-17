import React, { useEffect, useState } from 'react'
import { useStyles } from './profileStyles'
import { Box, Typography, TextField, Button } from '@mui/material'
import { getDoctorInfo, updateDoctorProfile } from '../../../services/doctor';
import { useParams } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setDoctorInfo } from '../../../store/reducers/doctorSlice';



export const Profile = () => {
    const classes = useStyles()
    const { user, doctorInfo } = useSelector(state => state)
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        doctorDetail()
    }, [])

    const [doctor, setDoctor] = useState(doctorInfo.doctorInfo)

    const doctorDetail = async () => {
        let res = await getDoctorInfo(user.token, params.id)
        dispatch(setDoctorInfo(res.doctor))
        setDoctor(res.doctor)
        // console.log(res, "info")
    }

    const [editDoctorDetails, setEditDoctorDetails] = useState({
        firstName: doctor?.firstName,
        lastName: doctor?.lastName,
        phone: doctor?.phone,
        email: doctor?.email,
        password: doctor?.password,
        address: doctor?.address,
        specialization: doctor?.specialization,
        consultationFee: doctor?.consultationFee,
        timing: doctor?.timing
    })

    const handleTimingChange = (time) => {
        console.log(time)
        setEditDoctorDetails({ ...editDoctorDetails, timing: time?.target?.value })
    }

    const handleUpdateBtn = async () => {
        if (editDoctorDetails.firstName === "" || editDoctorDetails.lastName === "" || editDoctorDetails.phone === "" ||
            editDoctorDetails.email === "" || editDoctorDetails.specialization === "" ||
            editDoctorDetails.consultationFee === "") {
            toast.error("Please fill all mandotary fields!")
        }
        else {
            let res = await updateDoctorProfile(user.token, { ...editDoctorDetails, userId: user.user.existingUser._id, _id: doctorInfo.doctorInfo._id })
            console.log(res, "res")
            if (res?.status) {
                toast.success(res?.message)
                setEditDoctorDetails({
                    firstName: res?.updatedDoc?.firstName,
                    lastName: res?.updatedDoc?.lastName,
                    phone: res?.updatedDoc?.phone,
                    email: res?.updatedDoc?.email,
                    password: res?.updatedDoc?.password,
                    address: res?.updatedDoc?.address,
                    specialization: res?.updatedDoc?.specialization,
                    consultationFee: res?.updatedDoc?.consultationFee,
                    timing: res?.updatedDoc?.timing
                })
                dispatch(setDoctorInfo(res.updatedDoc))
                setDoctor(res.updatedDoc)
                // doctorDetail()
            }
            else {
                toast.error(res)
            }
        }

    }

    const handleResetBtn = () => {
        setEditDoctorDetails({
            firstName: doctor?.firstName,
            lastName: doctor?.lastName,
            phone: doctor?.phone,
            email: doctor?.email,
            password: doctor?.password,
            address: doctor?.address,
            specialization: doctor?.specialization,
            consultationFee: doctor?.consultationFee,
            timing: doctor?.timing
        })
    }
    return (
        <>
            <Box component="section" className={classes.profileContainer}>
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Profile</Typography>

                {
                    doctor ? (
                        <>

                            <Box component="form" autoComplete="off" className={classes.form}>
                                <Box component="article" className={classes.formRows}>
                                    <TextField type='text' className={classes.inputs} label="First Name" variant="outlined"
                                        onChange={(e) => setEditDoctorDetails({ ...editDoctorDetails, firstName: e.target.value })} required
                                        defaultValue={doctor ? doctor.firstName : ""} />
                                    <TextField type='text' className={classes.inputs} label="Last Name" variant="outlined"
                                        onChange={(e) => setEditDoctorDetails({ ...editDoctorDetails, lastName: e.target.value })} required
                                        defaultValue={doctor ? doctor.lastName : ""} />
                                </Box>

                                <Box component="article" className={classes.formRows}>
                                    <TextField className={classes.inputs} label="Phone" variant="outlined"
                                        onChange={(e) => setEditDoctorDetails({ ...editDoctorDetails, phone: e.target.value })} required
                                        defaultValue={doctor ? doctor.phone : ""} />
                                    <TextField type='email' className={classes.inputs} label="Email" variant="outlined"
                                        onChange={(e) => setEditDoctorDetails({ ...editDoctorDetails, email: e.target.value })} required
                                        defaultValue={doctor ? doctor.email : ""} />
                                </Box>

                                <Box component="article" className={classes.formRows}>
                                    <TextField disabled type='password' className={classes.inputs} label="Password" variant="outlined"
                                        onChange={(e) => setEditDoctorDetails({ ...editDoctorDetails, password: e.target.value })} required
                                        defaultValue={doctor ? doctor.password : ""} />
                                    <TextField type='text' className={classes.inputs} label="Address" variant="outlined"
                                        onChange={(e) => setEditDoctorDetails({ ...editDoctorDetails, address: e.target.value })}
                                        defaultValue={doctor ? doctor.address : ""} />
                                </Box>

                                <Box component="article" className={classes.formRows}>
                                    <TextField type='text' className={classes.inputs} label="Specialization" variant="outlined"
                                        onChange={(e) => setEditDoctorDetails({ ...editDoctorDetails, specialization: e.target.value })} required
                                        defaultValue={doctor ? doctor.specialization : ""} />
                                    <TextField className={classes.inputs} label="Consultation Fee" variant="outlined"
                                        onChange={(e) => setEditDoctorDetails({ ...editDoctorDetails, consultationFee: e.target.value })}
                                        required inputProps={{ min: 0 }}
                                        defaultValue={doctor ? doctor.consultationFee : ""} />
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
                                <Button variant="outlined" className={classes.button} onClick={handleResetBtn}>Reset</Button>
                                <Button variant="contained" className={classes.button} onClick={handleUpdateBtn} >Update</Button>
                            </Box>
                        </>
                    ) :

                        <>
                            {
                                <Box className={classes.profileErrorContainer}>
                                    <Typography sx={{ color: "red", fontSize: "1em", fontWeight: "bold" }}>Sorry.... This page is only availabe for Doctors</Typography>
                                </Box>
                            }
                        </>
                }

            </Box>
        </>
    )
}
