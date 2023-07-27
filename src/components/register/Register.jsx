import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useStyles } from './registerStyles'

const Register = () => {
  const classes = useStyles()

  const [registrationDetails, setRegistrationDetails] = useState({ name: "", email: "", password: "" })

  return (
    <>
      <Box component="section" className={classes.registrationContainer} >
        <Box component="section" className={classes.registrationBox}>
          <Box component="section" className={classes.registrationBoxLogo}>
            <img className={classes.registrationBoxLogoImg} src={Logo} alt="Appoinment_logo" />
          </Box>

          <Box component="section" className={classes.registrationBoxInputs}>
            <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>CREATE NEW ACCOUNT</Typography>
            <TextField type='text' id="Name" label="Name" variant="outlined" placeholder='Enter your name' onChange={(e) => setRegistrationDetails({ ...registrationDetails, name: e.target.value })} />
            <TextField type='email' id="Email" label="Email" variant="outlined" placeholder='Enter your email' onChange={(e) => setRegistrationDetails({ ...registrationDetails, email: e.target.value })} />
            <TextField type='password' id="Password" label="Password" variant="outlined" placeholder='Enter your password' onChange={(e) => setRegistrationDetails({ ...registrationDetails, password: e.target.value })} />
            <Button variant="contained" className={classes.registrationBoxInputsBtn}>Register</Button>
          </Box>
        </Box>
        <Typography>
          Already have an account ? <span><Link to="/login">Login</Link></span>
        </Typography>
      </Box>
    </>
  )
}

export default Register