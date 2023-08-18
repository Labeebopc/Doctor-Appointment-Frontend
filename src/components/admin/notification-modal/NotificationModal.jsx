import React from 'react'
import { useStyles } from './notificationModalStyles'
import { Box, Typography, Button, Modal, Paper } from '@mui/material'

export const NotificationModal = ({
    handleOpenNotificationModal,
    handleCloseNotificationModal,
    notification
}) => {
    const classes = useStyles()
    return (
        <>
            <Modal
                open={handleOpenNotificationModal}
                onClose={handleCloseNotificationModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={{ border: "none", display: "flex", justifyContent: "center" }}>
                    <Box component="section" className={classes.notificationModalContainer}>
                        <Typography component="h2" sx={{ fontSize: "1.5em", fontWeight: "bold", textAlign: "center" }}>Notification Details</Typography>
                        <Box component="section" className={classes.notificationMessageBox} >
                            {
                                notification?.map((notifi, index) => (
                                    <Paper component="section" className={classes.notificationMessage} elevation={3} >
                                        <Typography sx={{ paddingLeft: "10px" }}>
                                            {notifi.message}
                                        </Typography>

                                    </Paper>
                                ))
                            }
                        </Box>
                        <Button variant="outlined" className={classes.button} onClick={handleCloseNotificationModal}>Close</Button>
                    </Box>
                </Paper>
            </Modal>

        </>
    )
}
