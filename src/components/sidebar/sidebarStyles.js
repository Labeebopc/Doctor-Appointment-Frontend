const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    sidebarContainer: {
        // border:"1px solid green",
        height: "100%",
        backgroundColor: "#E1F9F4",
        // width:"300px"
    },

    sidebarLogo: {
        textAlign: "center",
        // marginTop:"0.4em",
        // margin:"0.4em 0 0.4em 0",
        fontSize: "1.3em",
        borderBottom: "2px solid #FFFFFF",
        // border:"1px solid red",
        padding: "10px"
    },

    sidebarMenuItems: {
        display: "flex",
        flexDirection: "column"
    },

    sidebarMenuItemsLink: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        height: "3em",
        paddingLeft: "1.5em",

    },

    sidebarMenuItemsLinkActive: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        height: "3em",
        paddingLeft: "1.5em",
        color: "white",
        background: "red"
    }
});