import axios from '../../utils/axios';
import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import GetHeaders from '../../utils/headers';
import { Box, Button, makeStyles } from '@material-ui/core';
import useStyles from './Styles';

function Bill({cartItems, history}) {
    const classes = useStyles();
    let itemTotal = 0;
    let taxes = 0;

    cartItems.forEach(element => {
        itemTotal += element.cost
    });

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.patch('/api/v1/cart/placeOrder', {}, {headers: GetHeaders()}).then(resp => {
            history.push('/home');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <Box className={classes.billPad}>
            <Box>Bill Details</Box>
            <Box className={`${classes.itemRow}`}>
                <Box>Item Total</Box>
                <Box>₹ {itemTotal}</Box>
            </Box>
            <Box className={`${classes.itemRow} ${classes.itemTax}`}> 
                <Box>Taxes and charges</Box>
                <Box>₹ {taxes}</Box>
            </Box>
            <Box className={`${classes.itemRow} ${classes.itemToPay}`}>
                <Box>Total</Box>
                <Box>₹ {itemTotal + taxes}</Box>
            </Box>
                <Button className={classes.payButton} variant='contained' color='primary' fullWidth type='submit' onClick={handleSubmit}>Place Order</Button>
            <Link to='/orderHistory' className={`${classes.orderHistoryButton}`}><Button fullWidth variant='contained' color='secondary'>Your Order History</Button></Link>
        </Box>
    )
}

let mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(withRouter(Bill))
