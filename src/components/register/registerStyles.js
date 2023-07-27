const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({

    //Registration container
    registrationContainer: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#E1F9F4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px"

    },

    registrationBox: {
        height: "30em",
        width: "25em",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        // gap: "2em"
    },

    registrationBoxLogo: {
        height: "20%",
        paddingTop:"1em"
    },

    registrationBoxLogoImg: {
        objectFit: "contain",
        width: "100%",
        height: "100%",
        padding: "0.4em"
    },

    registrationBoxInputs: {
        height: "80%",
        width:"80%",
        margin:"auto",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "space-evenly",
        // paddingBottom:"1em",
       
    },

    registrationBoxInputsBtn: {
        boxShadow: "none",
        '&:hover': {
            backgroundColor: 'red', // Custom hover color
            color: 'white', // Custom hover text color,
            boxShadow: "none",
        },
        height:"3.5em",
        width:"10em",
        display:"flex",
        alignSelf:"center",
    }
});