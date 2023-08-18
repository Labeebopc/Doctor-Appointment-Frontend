const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    navbarContainer: {
        height: "10vh",
        display: "flex",
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor:"#0e0f10",
        // width:"100vw",
        // color:"#FFFFF",
        border: "1px solid #0e0f10"

    },

    NavbarLogoImg: {
        objectFit: "contain",
        width: "100%",
        height: "100%",
        padding: "0.4em"
    },

    navbarLastChild: {
        fontSize: "1.3em",
        display: "flex",
        alignItems: "center"
    }
});