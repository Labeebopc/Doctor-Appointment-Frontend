const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    doctorsContainer: {
        height: "100%",
        padding: "20px"
    },

    doctorsSearchSection: {
        marginTop: "1em",
    },

    doctorsTableSection: {
        marginTop: "0.5em",
        maxHeight: "79%",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar
        },
    },

    doctorsTableHead: {
        fontWeight: "bold"
    },


});