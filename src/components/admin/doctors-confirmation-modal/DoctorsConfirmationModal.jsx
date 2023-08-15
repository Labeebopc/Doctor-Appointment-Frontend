import React from 'react'
import { useStyles } from './doctorsConfirmationModalStyles'
import { Box, Typography, TextField, Button, Modal, MenuItem, Menu, Paper, IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { toast } from 'react-toastify';
import { changeConfirmationStatus } from '../../../services/admin';
import { useSelector } from 'react-redux';

export const DoctorsConfirmationModal = ({
    handleOpenDoctorsConfirmationModal,
    handleCloseDoctorsConfirmationModal,
    clickedDoctor,
    allDoctors,
    doctors
}) => {
    const classes = useStyles()
    const { user } = useSelector(state => state.user)
    // console.log(clickedDoctor)

    const updateConfirmationStatus = async (btn) => {
        let res = await changeConfirmationStatus(user.token, user.existingUser._id, btn)
        // console.log(res)
        //return res
    }

    const handleConfirmation = async (confirmationBtn) => {
        if (clickedDoctor.confirmation === "Rejected" && (confirmationBtn === "Accepted" || confirmationBtn === "Rejected")) {
            toast.error("This doctor is already rejected")
        }

        else if (clickedDoctor.confirmation === "Accepted" && (confirmationBtn === "Accepted")) {
            toast.error("This doctor is already accepted")
        }

        else if (clickedDoctor.confirmation === "Accepted" && (confirmationBtn === "Rejected")) {
            toast.success("This doctor rejected")
            await updateConfirmationStatus(confirmationBtn)
            allDoctors()
            handleCloseDoctorsConfirmationModal()
        }
        else {
            toast.success(`This doctor successfully ${confirmationBtn}`)
            await updateConfirmationStatus(confirmationBtn)
            allDoctors()
            handleCloseDoctorsConfirmationModal()
        }
    }
    return (
        <>
            <Modal
                open={handleOpenDoctorsConfirmationModal}
                onClose={handleCloseDoctorsConfirmationModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={{ border: "none", display: "flex", justifyContent: "center" }}>
                    <Box component="section" className={classes.doctorConfirmationModalContainer}>
                        <HighlightOffIcon onClick={handleCloseDoctorsConfirmationModal} sx={{ alignSelf: "flex-end", cursor: "pointer" }} />
                        <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Doctor Details</Typography>
                        <Box component="section" className={classes.doctorConfirmationModalSection} >

                            <Box component="article" className={classes.doctorConfirmationModalSectionRow} >
                                <TextField defaultValue={`${clickedDoctor?.firstName} ${clickedDoctor?.lastName}`}
                                    size='small' id="outlined-basic" sx={{ width: "49%" }} label="Name" variant="outlined" disabled />
                                <TextField defaultValue={clickedDoctor?.email} size='small' id="outlined-basic"
                                    sx={{ width: "49%" }} label="Email" variant="outlined" disabled />
                            </Box>

                            <Box component="article" className={classes.doctorConfirmationModalSectionRow} >
                                <TextField defaultValue={clickedDoctor?.phone} size='small' id="outlined-basic"
                                    sx={{ width: "49%" }} label="Phone" variant="outlined" disabled />
                                <TextField defaultValue={clickedDoctor?.specialization.toUpperCase()} size='small'
                                    id="outlined-basic" sx={{ width: "49%" }} label="Specialization" variant="outlined" disabled />
                            </Box>

                            <Box component="article" className={classes.doctorConfirmationModalSectionRow} >
                                <TextField defaultValue={clickedDoctor?.timing} size='small' id="outlined-basic"
                                    sx={{ width: "49%" }} label="Timing" variant="outlined" disabled />
                                <TextField defaultValue={clickedDoctor?.consultationFee} size='small'
                                    id="outlined-basic" sx={{ width: "49%" }} label="Consultation Fee" variant="outlined" disabled />
                            </Box>

                            <Box component="article" className={classes.doctorConfirmationModalSectionRow} >
                                <TextField defaultValue={clickedDoctor?.address} size='medium' id="outlined-basic"
                                    sx={{ width: "100%" }} label="Address" variant="outlined" disabled />
                            </Box>

                            <Box component="article" className={classes.doctorConfirmationModalSectionBtn} >
                                <Button variant="contained" sx={{ textTransform: "none", fontSize: "1em" }} onClick={() => handleConfirmation("Accepted")}>Accept</Button>
                                <Button variant="contained" sx={{ textTransform: "none", fontSize: "1em" }} onClick={() => handleConfirmation("Rejected")} color='error'>Reject</Button>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Modal>
        </>
    )
}
