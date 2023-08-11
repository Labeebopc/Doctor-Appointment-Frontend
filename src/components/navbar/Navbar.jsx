import React, { useState } from 'react'
import { useStyles } from './navbarStyles'
import { Box, Typography, TextField, Button } from '@mui/material'
import Logo from '../../assets/logo.png'
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { setUser } from '../../store/reducers/userSlice';
import { toast } from 'react-toastify';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export const Navbar = () => {
    const { user } = useSelector(state => state.user)
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        Cookies.set("user", "");
        dispatch(setUser(""));
        toast.success("Successfully logged out")
        navigate("/login");
    };

    return (
        <>
            <Box component="section" className={classes.navbarContainer}>
                <Box component="article" sx={{ fontSize: "1.3em" }}>
                    {/* <img className={classes.NavbarLogoImg} src={Logo} alt="Appoinment_logo" /> */}
                    Logo
                </Box>
                <Box component="article" sx={{ fontSize: "1.3em", display: "flex", alignItems: "center" }}>
                    <Badge sx={{marginRight:"18px"}} badgeContent={4} color="error">
                        <NotificationsNoneIcon color="action" />      
                    </Badge>

                    <Typography>{user?.existingUser?.name}</Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="white"
                    >
                        <AccountCircle />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </>
    )
}
