import React from "react";
import { useStyles } from "./doctorListStyles";
import {Box,Typography,TextField,Button,Card,CardContent} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const DoctorList = ({ doctrs }) => {
  const classes = useStyles();

  const navigate=useNavigate()

  const handleHomepageCard=(doc)=>{
        // navigate(`/user/appointment/${doc._id}`)
        navigate(`/user/appointment`)
  }
  return (
    <>
      {/* <Box component="section" className={classes.doctorListContainer}> */}
      <Card
        variant="outlined" onClick={()=>handleHomepageCard(doctrs)}
        sx={{ borderRadius: "16px",display: "flex",flexDirection: "column",justifyContent: "space-between",height: "150px", width: "24%",cursor: "pointer",}}>
        <CardContent sx={{display:"flex", flexDirection:"column"}}>
          <Typography variant="h6" component="h6">
            Dr. {`${doctrs?.firstName} ${doctrs?.lastName}`}
          </Typography>
          <Typography color="text.secondary" sx={{ marginTop: "0.4em", fontSize:"1em" }}>
            <span>Specialization:</span> {doctrs?.specialization}
          </Typography>

          <Typography sx={{fontSize:"1em"}} color="text.secondary">
            <span>Fee Per Consultation:</span> &#8377;{doctrs?.consultationFee}
          </Typography>

          <Typography sx={{fontSize:"1em"}} color="text.secondary">
            <span>Timing:</span> {doctrs?.timings}
          </Typography>
        </CardContent>
      </Card>

      {/* </Box> */}
    </>
  );
};
