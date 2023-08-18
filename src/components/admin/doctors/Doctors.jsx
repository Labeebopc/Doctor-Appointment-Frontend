import React, { useEffect, useState } from 'react'
import { useStyles } from './doctorsStyles'
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteDoctor, getAllDoctors } from '../../../services/admin'
import { useSelector } from 'react-redux';
import { DoctorsConfirmationModal } from '../doctors-confirmation-modal/DoctorsConfirmationModal';
import { toast } from 'react-toastify'

export const Doctors = () => {
    const classes = useStyles()
    const { user } = useSelector(state => state.user)
    const [doctors, setDoctors] = useState([])
    const [query, setQuery] = useState("")
    const keys = ["firstName", "lastName"];
    const [openDoctorsConfirmationModal, setOpenDoctorsConfirmationModal] = useState(false)
    const [clickedDoctor, setClickedDoctor] = useState([])

    const handleOpenDoctorsConfirmationModal = () => setOpenDoctorsConfirmationModal(true);
    const handleCloseDoctorsConfirmationModal = () => setOpenDoctorsConfirmationModal(false);

    useEffect(() => {
        allDoctors()
    }, [])

    const allDoctors = async () => {
        let res = await getAllDoctors(user.token)
        // console.log(res.allDoctors, "docs")
        setDoctors(res.allDoctors)
    }

    const handleMoreBtn = (dctr) => {
        setClickedDoctor(dctr)
        handleOpenDoctorsConfirmationModal()
    }

    const handleDelete = async (dctr) => {
        let res = await deleteDoctor(user.token, dctr._id)
        allDoctors()
        if (res.status) {
            toast.success(res.message)
        }
    }
    return (
        <>
            <Box component="section" className={classes.doctorsContainer}>
                {
                    openDoctorsConfirmationModal && <>
                        <DoctorsConfirmationModal
                            handleOpenDoctorsConfirmationModal={handleOpenDoctorsConfirmationModal}
                            handleCloseDoctorsConfirmationModal={handleCloseDoctorsConfirmationModal}
                            clickedDoctor={clickedDoctor}
                            allDoctors={allDoctors}
                            doctors={doctors}
                        />
                    </>
                }
                <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>All Doctors</Typography>
                <Box component="section" className={classes.doctorsSearchSection}>
                    <TextField size='small' onChange={(e) => setQuery(e.target.value)} id="outlined-basic" label="Search" variant="outlined" />
                </Box>
                <Box component="section" className={classes.doctorsTableSection}>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="left">Name</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="center">Email</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="center">Specialization</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="center">Confirmation</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", fontSize: "1em" }} align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    doctors?.filter((doctor) =>
                                        keys.some((key) => doctor[key]?.toLowerCase()?.includes(query))
                                    ).map(doctor => (
                                        <TableRow>
                                            <TableCell align="left">{`${doctor.firstName} ${doctor.lastName}`}</TableCell>
                                            <TableCell align="center">{doctor.email}</TableCell>
                                            <TableCell align="center">{doctor.specialization.toUpperCase()}</TableCell>
                                            <TableCell align="center">
                                                {
                                                    doctor.confirmation === "Pending" &&
                                                    <Typography sx={{ padding: "6px 0", borderRadius: "5px", background: "#e9a4237a", fontSize: "1em" }}>
                                                        {doctor.confirmation}
                                                    </Typography>

                                                    ||

                                                    doctor.confirmation === "Accepted" &&
                                                    <Typography sx={{ padding: "6px 0", borderRadius: "5px", background: "#64d90e7a", fontSize: "1em" }}>
                                                        {doctor.confirmation}
                                                    </Typography>

                                                    ||

                                                    doctor.confirmation === "Rejected" &&
                                                    <Typography sx={{ padding: "6px 0", borderRadius: "5px", background: "#ff4949d4", fontSize: "1em" }}>
                                                        {doctor.confirmation}
                                                    </Typography>
                                                }
                                            </TableCell>
                                            <TableCell align="center" sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                                                <Button size='small' variant="outlined" sx={{ textTransform: "none", fontSize: "1.1em" }} onClick={() => handleMoreBtn(doctor)}>
                                                    More
                                                </Button>
                                                <IconButton aria-label="delete" color="error" >
                                                    <DeleteIcon onClick={() => handleDelete(doctor)} />
                                                </IconButton>

                                            </TableCell>
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
