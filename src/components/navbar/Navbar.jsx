import React, { useEffect, useState } from 'react'
import { useStyles } from './navbarStyles'
import { Box, Typography, TextField, Button, Modal, MenuItem, Menu, Badge, IconButton } from '@mui/material'
// import Logo from '../../assets/logo.png'
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import AccountCircle from "@mui/icons-material/AccountCircle";
import { setUser } from '../../store/reducers/userSlice';
import { toast } from 'react-toastify';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { getAllNotification } from '../../services/admin';
import { NotificationModal } from '../admin/notification-modal/NotificationModal';

export const Navbar = () => {
    const { user } = useSelector(state => state.user)
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null);
    const [notification, setNotification] = useState([])
    const [openNotificationModal, setOpenNotificationModal] = useState(false)

    const handleOpenNotificationModal = () => setOpenNotificationModal(true);
    const handleCloseNotificationModal = () => setOpenNotificationModal(false);


    useEffect(() => {
        if (user?.existingUser.isAdmin) {
            allNotifications()
        }

    }, [])

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

    const allNotifications = async () => {
        let res = await getAllNotification(user?.token, user?.existingUser._id)
        // console.log(res.notification, "notifi")
        setNotification(res.notification)
    }

    return (
        <>
            <Box component="section" className={classes.navbarContainer}>
                {
                    openNotificationModal &&
                    <NotificationModal
                        handleOpenNotificationModal={handleOpenNotificationModal}
                        handleCloseNotificationModal={handleCloseNotificationModal}
                        notification={notification}
                    />
                }
                <Box component="article" sx={{ fontSize: "1.3em" }}>
                    {/* <img className={classes.NavbarLogoImg} src={Logo} alt="Appoinment_logo" /> */}
                    Logo
                </Box>
                <Box component="article" className={classes.navbarLastChild}>
                    {
                        user?.existingUser?.isAdmin && <>
                            <Badge sx={{ marginRight: "18px", cursor: "pointer" }} badgeContent={notification?.length} color="error" onClick={handleOpenNotificationModal}>
                                <NotificationsNoneIcon sx={{ cursor: "pointer" }} onClick={handleOpenNotificationModal} color="action" />
                            </Badge>
                        </>
                    }


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
