const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({

    //Login container
    loginContainer: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#E1F9F4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px"

    },

    loginBox: {
        height: "25em",
        width: "25em",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        // gap: "2em"
    },

    loginBoxLogo: {
        height: "30%",
        paddingTop: "1em"
    },

    loginBoxLogoImg: {
        objectFit: "contain",
        width: "100%",
        height: "100%",
        padding: "0.4em"
    },

    loginBoxInputs: {
        height: "70%",
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "space-evenly",
        paddingBottom: "2em"
    },

    loginBoxInputsBtn: {
        boxShadow: "none",
        '&:hover': {
            backgroundColor: 'red', // Custom hover color
            color: 'white', // Custom hover text color,
            boxShadow: "none",
        },
    }
});