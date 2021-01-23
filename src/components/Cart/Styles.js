import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cartItemsBill: {
        display: 'flex',
        width: '90%',
        margin: '0 auto',
        marginTop: '50px',
        justifyContent: 'space-between',
    },
    emptyCart: {
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '20px',
    }
})

export default useStyles;