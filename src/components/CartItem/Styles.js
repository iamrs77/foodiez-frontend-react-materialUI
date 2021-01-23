import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    listOfItems: {
        width: '50%',
    },
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '20px',
        borderBottom: '3px solid gray',
        marginBottom: '40px',
    },
    image: {
        width: '150px',
        height: '150px',
        objectFit: 'contain',
    },
    itemLeft: {
        display: 'flex',
        flexDirection: 'column'
    },
    itemRight: {
        position: 'relative',
        height: 'fit-content',
    },
    removeButton: {
        position: 'absolute',
        bottom: '-10px',
        left: '25px',
    },
    itemName: {
        fontSize: '30px',
        fontWeight: 'bold',
    },
    itemType: {
        color: 'gray',
        fontSize: '14px',
    },
    itemDesc: {
        marginTop: '20px',
        height: '48px',
        overflow: 'hidden',
    },
    itemCost: {
        color: 'gray',
        fontWeight: 'bold',
    }
})

export default useStyles;