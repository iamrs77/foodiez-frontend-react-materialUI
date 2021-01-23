import React from 'react'
import {connect} from 'react-redux';
import Bill from '../Bill/Bill';
import CartItems from '../CartItem/CartItems';
// import '../styles/Cart.css'
import { Link } from 'react-router-dom';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import useStyles from './Styles';

function Cart({cartItems}) {
    const classes = useStyles();

    return cartItems.length > 0 ? (
        <Box className={classes.cartItemsBill}>
            <CartItems />
            <Bill/>
        </Box>
    ) : (
        <Box className={classes.emptyCart}>
            <Link to='/orderHistory' className='no__textDecoration'><Button variant='contained' color='primary'>Your Order History</Button></Link>
            <Typography variant='h6'>Oops.. Your cart is empty</Typography>
        </Box>
    );
}

let mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(Cart)
