import React from 'react'
import { useStyles } from './doctorsConfirmationModalStyles'
import { Box, Typography, TextField, Button, Modal, MenuItem, Menu, Paper, IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const DoctorsConfirmationModal = ({
    handleOpenDoctorsConfirmationModal,
    handleCloseDoctorsConfirmationModal,
    clickedDoctor,
    allDoctors,
    doctors
}) => {
    const classes = useStyles()
    // console.log(clickedDoctor)

    const handleConfirmation = async (confirmationBtn) => {
        
        console.log(confirmationBtn)
        allDoctors()
        handleCloseDoctorsConfirmationModal()
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
