import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    fullScreenHeight: {
        height: "100vh",
        // backgroundColor: '#fafafa'
    },
    loginContainerStyle: {
        color: '#626161',
        backgroundColor: 'white',
        marginTop: '150px',
        // display: 'flex;
        // flex-direction: column;
        width: '400px',
        height: 'fit-content',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '1px 2px 3px rgba(0, 0, 0, 0.1)',
        margin: '0 auto'
    },
    textField: {
        width: '100%',
        padding: `8px 10px`,
        border: `1px solid #ddd`,
        borderRadius: `4px`,
        outline: 0,
    },
    typographyMargins: {
        marginBottom: '10px',
        marginTop: '15px',
    },
    loginButtonStyle: {
        backgroundColor: "#fee996",
        borderRadius: "36px",
        marginTop: '30px',
        border: 0,
        textTransform: 'uppercase',
        padding: '10px 16px',
        letterSpacing: '2px',
    },
});
export default useStyles;