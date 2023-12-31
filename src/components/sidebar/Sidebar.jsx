import React, { useState } from 'react'
import { useStyles } from './sidebarStyles'
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material'
import { useSelector } from 'react-redux';

export const Sidebar = () => {
    const { user } = useSelector(state => state.user)
    const classes = useStyles()
    const location = useLocation()

    //User menu
    const sidebarUserMenu = [
        {
            name: "Home",
            path: "/user",
            icon: HomeIcon
        },

        {
            name: "Appointment",
            path: "/user/appointment",
            icon: ListIcon
        }
        ,
        {
            name: "Apply Doctor",
            path: "/user/applydoctor",
            icon: MedicalServicesIcon
        },
        {
            name: "Profile",
            path: "/user/profile",
            icon: PersonIcon
        },
        {
            name: "Settings",
            path: "/user/settings",
            icon: SettingsIcon
        }

    ]

    //Admin menu
    const sidebarAdminMenu = [
        {
            name: "Home",
            path: "/admin",
            icon: HomeIcon
        }
        ,
        {
            name: "Doctors",
            path: "/admin/doctors",
            icon: MedicalServicesIcon
        },
        {
            name: "Users",
            path: "/admin/users",
            icon: PersonIcon
        },
        {
            name: "Settings",
            path: "/admin/settings",
            icon: SettingsIcon
        }
    ]

    //Doctor menu
    const sidebarDoctorMenu = [
        {
            name: "Home",
            path: "/doctor",
            icon: HomeIcon
        },

        {
            name: "Appointments",
            path: "/doctor/appointments",
            icon: ListIcon
        },
        {
            name: "Profile",
            path: `/doctor/profile/${user?.existingUser?._id}`,
            icon: PersonIcon
        },
        {
            name: "Settings",
            path: "/doctor/settings",
            icon: SettingsIcon
        }

    ]

    const sidebarMenu = user?.existingUser?.isAdmin ? sidebarAdminMenu : user?.existingUser?.isDoctor ? sidebarDoctorMenu : sidebarUserMenu

    return (
        <>
            <Box component="section" className={classes.sidebarContainer}>
                <Box component="article" className={classes.sidebarLogo}>
                    <h3>Doc App</h3>
                </Box>

                <Box component="section" className={classes.sidebarMenuItems}>
                    {
                        sidebarMenu.map((menu, index) => (
                            <>
                                <Link key={index} to={menu.path} className={location.pathname === menu.path ? classes.sidebarMenuItemsLinkActive : classes.sidebarMenuItemsLink}>
                                    <menu.icon />
                                    {menu.name}
                                </Link>

                            </>
                        ))
                    }
                </Box>

            </Box>
        </>
    )
}
