const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    doctorsContainer: {
        // border:"1px solid red",
        height: "100%",
        padding: "20px"
    },

    doctorsSearchSection: {
        marginTop: "1em",
    },

    doctorsTableSection: {
        // border:"1px solid red",
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