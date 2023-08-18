const { makeStyles } = require("@material-ui/styles");

export const useStyles = makeStyles({
  newAppointmentContainer: {
    // border:"1px solid red",
    height: "100%",
    padding: "20px",
  },

  newAppointmentForm: {
    marginTop: "2em",
    // border:"1px solid red",
    height: "75%",
  },

  newAppointmentFormHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // newAppointmentFormHeadBtn: {
  //   height: "3.2em",
  // },

  newAppointmentDocDetails: {
    marginTop: "2em",
  },

  newAppointmentBooking: {
    marginTop: "1em",
  },

  formRows: {
    // border:"1px solid red",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1em",
  },

  inputs: {
    width: "49%",
  },

  buttonSection: {
    display: "flex",
    gap: "5em",
    justifyContent: "center ",
    marginTop: "1em",
  },

  button: {
    width: "190px",
    // height: "50px",
  },
});
