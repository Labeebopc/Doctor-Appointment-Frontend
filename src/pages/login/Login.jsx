import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useStyles } from './loginStyles'
import { userLogin } from '../../services/admin'
import { toast } from 'react-toastify'
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from '../../store/reducers/userSlice'

const Login = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" })

  const handleLogin = async () => {
    if (loginDetails.email === "" || loginDetails.password === "") {
      toast.error("Please enter email and password!")
    }
    else {
      let res = await userLogin(loginDetails)
      if (res.status) {
        dispatch(setUser(res))
        Cookies.set("user", JSON.stringify(res));

        await res?.existingUser?.isAdmin ? navigate("/admin") : res?.existingUser?.isDoctor ? navigate("/doctor") : navigate("/user")
        // await res?.existingUser?.isAdmin ? navigate("/admin") : navigate("/user")
      }
      else toast.error(res)
    }

  }


  return (
    <>
      <Box component="section" className={classes.loginContainer} >
        <Box component="section" className={classes.loginBox}>
          <Box component="section" className={classes.loginBoxLogo}>
            <img className={classes.loginBoxLogoImg} src={Logo} alt="Appoinment_logo" />
          </Box>

          <Box component="section" className={classes.loginBoxInputs}>
            <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>LOGIN</Typography>
            <TextField type='email' id="Email" label="Email" variant="outlined" placeholder='Enter your email'
              onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} required />
            <TextField type='password' id="Password" label="Password" variant="outlined" placeholder='Enter your password'
              onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} required />
            <Button variant="contained" className={classes.loginBoxInputsBtn} onClick={handleLogin}>Login</Button>
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