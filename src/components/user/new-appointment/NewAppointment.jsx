import React, { useEffect, useState } from 'react'
import { useStyles } from './newAppointmentStyles'
import { Box, Typography, TextField, Button ,InputLabel,MenuItem ,FormControl ,Select  } from '@mui/material'
import { getAllDoctors } from '../../../services/user'
import { useSelector, useDispatch } from 'react-redux';

export const NewAppointment = () => {
    const { user } = useSelector(state => state.user)
    const classes = useStyles()

    const [doctors, setDoctors]=useState([])
    const [selectedDoctor, setSelectedDoctor]=useState("")
    const [bookAppointment, setBookAppointment]=useState({name:"", phone:"", date:"",time:""})

    useEffect(() => {
        allDocs()
    }, [])

    const allDocs = async () => {
        let res = await getAllDoctors(user.token)
        setDoctors(res.allDoctors)
        console.log(res?.allDoctors, "alldoc")
    }

    const handleDropDown=(e)=>{
        setSelectedDoctor(e.target.value)
    }

    const handleCheckAvailability=()=>{
        // setBookAppointment({name:"", phone:"", date:"",time:""})
    }

    const handleBookNow=()=>{
        //
    }

    return (
        <>
            <Box component="section" className={classes.newAppointmentContainer}>
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Appointment</Typography>
                <Box component="section" className={classes.newAppointmentForm} >
                    <Box component="section" className={classes.newAppointmentFormHead} >
                    <FormControl sx={{width:"49%"}}>
                   <InputLabel id="demo-simple-select-label">Select Doctor</InputLabel>
                     <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectedDoctor} label="Select Doctor" onChange={(e)=>handleDropDown(e)} >
                                 {
                                    doctors?.map(docs=>(
                                        <MenuItem value={docs}>{`${docs.firstName} ${docs.lastName}`}</MenuItem>
                                    ))
                                 }
                    </Select>
                </FormControl>
                
                <Button variant="contained" sx={{textTransform:"none",fontSize:"1em"}} className={classes.newAppointmentFormHeadBtn}>My Appointments</Button>
                    </Box>
            

                <Box component="section" className={classes.newAppointmentDocDetails} >
                <Typography sx={{ fontWeight:"bold", fontSize:"1.2em"}}>Selected Doctor Details</Typography>


                <Box component="article" className={classes.formRows}>
                        <TextField className={classes.inputs} label="Name" variant="outlined"
                            value={selectedDoctor? `${selectedDoctor.firstName} ${selectedDoctor.lastName}` :""} disabled />
                        <TextField type='text' className={classes.inputs} label="Phone" variant="outlined"
                            value={selectedDoctor? selectedDoctor.phone :""} disabled />
                    </Box>

                    <Box component="article" className={classes.formRows}>
                        <TextField type='text' className={classes.inputs} label="Specialization" variant="outlined"
                            value={selectedDoctor?selectedDoctor.specialization :""} disabled />
                        <TextField className={classes.inputs} label="Consultation Fee" variant="outlined"
                            required inputProps={{ min: 0 }}
                            value={selectedDoctor? selectedDoctor.consultationFee :""} disabled />
                    </Box>

                    <Box component="article" className={classes.formRows}>
                        <TextField type='text' className={classes.inputs} label="Address" variant="outlined"
                            value={selectedDoctor?selectedDoctor.address:""} disabled/>
                    </Box>
                    {/* <Box component="article" className={classes.formRows}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <SingleInputTimeRangeField
                                label="From - To"
                                // value={}
                                // onChange={(e) => handleTimingChange(e)} // Pass the onChange event handler to the component
                            />
                        </LocalizationProvider>

                    </Box> */}

                </Box>

                <Box component="section" className={classes.newAppointmentDocDetails} >
                <Typography sx={{ fontWeight:"bold", fontSize:"1.2em"}}>Book Your Appointment</Typography>


                <Box component="article" className={classes.formRows}>
                        <TextField className={classes.inputs} label="Name" variant="outlined"
                        onChange={(e)=>setBookAppointment({...bookAppointment, name:e.target.value})}
                            value={bookAppointment.name} required />
                        <TextField type='text' className={classes.inputs} label="Phone" variant="outlined"
                        onChange={(e)=>setBookAppointment({...bookAppointment, phone:e.target.value})}
                            value={bookAppointment.phone} required  />
                    </Box>

                    <Box component="article" className={classes.formRows}>
                        <TextField className={classes.inputs} label="Date" variant="outlined"
                        onChange={(e)=>setBookAppointment({...bookAppointment, date:e.target.date})}
                            value={bookAppointment.date} required />
                        <TextField type='text' className={classes.inputs} label="Time" variant="outlined"
                        onChange={(e)=>setBookAppointment({...bookAppointment, time:e.target.value})}
                            value={bookAppointment.time} required />
                    </Box>

                    <Box component="section" className={classes.buttonSection} >
                    <Button variant="outlined" sx={{textTransform: "none", fontSize: "1em"}} className={classes.button} onClick={handleCheckAvailability}>Check Availability</Button>
                    <Button variant="contained" sx={{textTransform: "none", fontSize: "1em"}} className={classes.button} onClick={handleBookNow} >Book Now</Button>
                </Box>


                </Box>
                
                </Box>
            </Box>
        </>
    )
}
