const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    doctorConfirmationModalContainer: {
        position: "absolute",
        left: "50%",
        padding: "25px 25px 0 25px",
        backgroundColor: "#FFFFFF",
        width: "35em",
        height: "27em",
        borderRadius: "5px",
        top: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        border: "none"
    },

    doctorConfirmationModalSection: {
        marginBottom: "1em",
        maxHeight: "27em",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar
        },
    },

    doctorConfirmationModalSectionRow: {
        padding: "10px",
        display: "flex",
        justifyContent: "space-between"
    },

    doctorConfirmationModalSectionBtn: {
        padding: "10px",
        display: "flex",
        justifyContent: "space-around"
    },

});