import React from "react";
// import { useStyles } from "./doctorListStyles";
import { Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const DoctorList = ({ doctrs }) => {
  // const classes = useStyles();
  const { user } = useSelector(state => state.user)

  const navigate = useNavigate()

  const handleHomepageCard = (doc) => {
    // navigate(`/user/appointment/${doc._id}`)
    if (!user?.existingUser?.isDoctor) {
      navigate(`/user/appointment`)
    }
  }
  return (
    <>
      <Card
        variant="outlined" onClick={() => handleHomepageCard(doctrs)}
        sx={{ borderRadius: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "140px", width: "30%", cursor: "pointer", }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" component="h6" sx={{ fontSize: "1em", fontWeight: "bold" }}>
            Dr. {`${doctrs?.firstName} ${doctrs?.lastName}`}
          </Typography>
          <Typography color="text.secondary" sx={{ marginTop: "0.4em", fontSize: "1em" }}>
            <span>Specialization:</span> {doctrs?.specialization}
          </Typography>

          <Typography sx={{ fontSize: "1em" }} color="text.secondary">
            <span>Consultation Fee:</span> &#8377;{doctrs?.consultationFee}
          </Typography>

          <Typography sx={{ fontSize: "1em" }} color="text.secondary">
            <span>Timing:</span> {doctrs?.timings}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
