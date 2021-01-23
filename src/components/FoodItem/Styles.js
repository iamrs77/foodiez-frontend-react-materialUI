import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '300px',
        marginBottom: '30px',
        marginLeft: '30px',
    },
    image: {
        height: '200px',
        width: '270px'
    },
    foods: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    cardMain: {
        padding: '10px'
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: '24px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: '1.5em',
        whiteSpace: 'nowrap',
    },
    cardDesc: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        margin: '12px 0',
        whiteSpace: 'nowrap',
    },
    cardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        fontSize: '14px',
        color: '#6a6a6a',
    }
});

export default useStyles;