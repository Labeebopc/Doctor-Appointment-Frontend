const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    applyDoctorContainer: {
        // border:"1px solid red",
        height: "100%",
        padding: "20px"
    },

    form: {
        marginTop: "1em",
        // border:"1px solid red",
        height: "75%",
    },

    formRows: {
        // border:"1px solid red",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1.5em"
    },

    inputs: {
        width: "49%"
    },

    buttonSection: {
        display: "flex",
        gap: "5em",
        justifyContent: "center "
    },

    button: {
        width: "150px",
        height: "50px",
    }

});