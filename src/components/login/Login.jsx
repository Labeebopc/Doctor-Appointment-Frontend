import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useStyles } from './loginStyles'

const Login = () => {
  const classes = useStyles()

  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" })

  return (
    <>
      <Box component="section" className={classes.loginContainer} >
        <Box component="section" className={classes.loginBox}>
          <Box component="section" className={classes.loginBoxLogo}>
            <img className={classes.loginBoxLogoImg} src={Logo} alt="Appoinment_logo" />
          </Box>

          <Box component="section" className={classes.loginBoxInputs}>
            <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>LOGIN</Typography>
            <TextField type='email' id="Email" label="Email" variant="outlined" placeholder='Enter your email' onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />
            <TextField type='password' id="Password" label="Password" variant="outlined" placeholder='Enter your password' onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />
            <Button variant="contained" className={classes.loginBoxInputsBtn}>Login</Button>
          </Box>
        </Box>
        <Typography>
          Dont't have an account ? <span><Link to="/register">Register</Link></span>
        </Typography>
      </Box>
    </>
  )
}

export default Login