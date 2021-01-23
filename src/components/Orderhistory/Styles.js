import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    orders: {
        width: '80%',
        margin: '0 auto',
        padding: '20px',
        marginBottom: '30px',
        borderBottom: '1px solid lightgray',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    aboutTime: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '20px'
        }
        
    },
    ordersTitle: {
        marginTop: '10px',
        textAlign: 'center'
    },
}));

export default useStyles;