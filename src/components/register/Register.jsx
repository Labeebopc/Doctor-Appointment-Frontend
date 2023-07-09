import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useStyles } from './registerStyles'

const Register = () => {
  const classes = useStyles()

  return (
    <>
      <Box component="section" className={classes.registrationContainer} >
        <Box component="section" className={classes.registrationBox}>
          <Box component="section" className={classes.registrationBoxLogo}>
            <img className={classes.registrationBoxLogoImg} src={Logo} alt="Appoinment_logo" />
          </Box>

          <Box component="section" className={classes.registrationBoxInputs}>
            <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>CREATE NEW ACCOUNT</Typography>
            <TextField id="Name" label="Name" variant="outlined" placeholder='Enter your name' />
            <TextField id="Email" label="Email" variant="outlined" placeholder='Enter your email' />
            <TextField id="Password" label="Password" variant="outlined" placeholder='Enter your password' />
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