import React from 'react'
import { useStyles } from './doctorListStyles'
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material'

export const DoctorList = ({ doctrs }) => {
    const classes = useStyles()
    return (
        <>
            {/* <Box component="section" className={classes.doctorListContainer}> */}
                <Card variant="outlined" sx={{ borderRadius: "20px", border:"1px solid red",height:"10em",width:"23%" }}>
                    <CardContent>
                        <Typography variant="h6" component="h6" >
                            Dr. {`${doctrs?.firstName} ${doctrs?.lastName}`}
                        </Typography>
                        <Typography color="text.secondary" sx={{ marginTop: "0.4em" }}>
                            <span>Specialization:</span> {doctrs?.specialization}
                        </Typography>

                        <Typography color="text.secondary">
                            <span>Fee Per Consultation:</span> &#8377;{doctrs?.consultationFee}
                        </Typography>

                        <Typography color="text.secondary">
                            <span>Timing:</span> {doctrs?.timings}
                        </Typography>
                    </CardContent>
                </Card>

            {/* </Box> */}
        </>
    )
}
