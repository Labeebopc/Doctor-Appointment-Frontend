const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    homeContainer: {
        // border:"1px solid red",
        height: "100%",
        padding: "20px"
    },

    cardSection: {
        marginTop: "1em",
        // border:"1px solid red",
        height: "90%",
        maxHeight: "90%",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar
        },
        display:"flex",
        gap:"10px",
        flexWrap:"wrap"
        // display:"grid",
        // gridTemplateColumns:"repeat(3, 1fr)",
    }
});