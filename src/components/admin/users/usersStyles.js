const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    usersContainer: {
        height: "100%",
        padding: "20px"
    },
    usersSearchSection: {
        marginTop: "1em",
    },

    usersTableSection: {
        // border:"1px solid red",
        marginTop: "0.5em",
        maxHeight: "85%",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar
        },
    },

    usersTableHead: {
        fontWeight: "bold"
    }
});