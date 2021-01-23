import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    billPad: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0.7',
        border: '1px solid lightgray',
        height: 'fit-content',
        padding: '15px',
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.3)',
        position: 'sticky',
        top: '70px',
    },
    itemRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
    },
    itemToPay: {
        borderTop: '1px solid black',
    },
    itemTax: {
        color: '#8c8888',
        fontSize: '14px',
    },
    orderHistoryButton: {
        marginTop: '30px !important',
        textDecoration: 'none'
    },
    payButton: {
        marginTop: '20px',
    }
})

export default useStyles;