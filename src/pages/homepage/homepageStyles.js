const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    homepageContainer: {
        height: "90vh",
        width: "100vw",
        display: "flex"
    },

    sidebarSection: {
        width: "300px",
        // padding:"10px",
        // boxShadow:"0 0 2px red"
    },
    dashboardSection: {
        width: "100%",
        // padding:"10px"
    }
});