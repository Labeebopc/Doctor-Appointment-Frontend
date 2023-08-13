const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    notificationModalContainer: {
        position: "absolute",
        left: "50%",
        padding: "25px",
        backgroundColor: "#FFFFFF",
        width: "35em",
        height: "28em",
        borderRadius: "5px",
        top: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        border: "none"
    },

    notificationMessageBox: {
        marginBottom: "1em",
        maxHeight:"20em",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar
        },
    },


    notificationMessage: {
        height: "4em",
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        borderLeft: "8px solid green"
    },

    button: {
        width: "150px",
        height: "40px",
        alignSelf: "center",
    }
});