import React, { useEffect, useState } from 'react'
import { useStyles } from './usersStyles'
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../../../services/admin'

export const Users = () => {
    const classes = useStyles()

    const { user } = useSelector(state => state.user)
    const [users, setUsers] = useState([])

    useEffect(() => {
        allUsers()
    }, [])

    const allUsers = async () => {
        let res = await getAllUsers(user.token)
        // console.log(res.allUsers, "users")
        setUsers(res.allUsers)
    }
    return (
        <>
            <Box component="section" className={classes.usersContainer}>
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Users</Typography>
                <Box component="section" className={classes.usersSearchSection}>
                    <TextField size='small' id="outlined-basic" label="Search" variant="outlined" />
                </Box>
                <Box component="section" className={classes.usersTableSection}>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="left">Name</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="center">Email</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="center">Doctor</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users?.map(user=>(
                                        <TableRow>
                                        <TableCell align="left">{user.name}</TableCell>
                                        <TableCell align="center">{user.email}</TableCell>
                                        <TableCell align="center">{user.isDoctor? "Yes" :"No"}</TableCell>
                                        <TableCell align="center">Coming soon</TableCell>
                                    </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    )
}
