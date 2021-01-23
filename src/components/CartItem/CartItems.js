import React from 'react'
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';
import { Box, Button, makeStyles } from '@material-ui/core';
import useStyles from './Styles';

function CartItems({cartItems, deleteItem}) {
    const classes = useStyles();

    let removeitem = (item) => {
        deleteItem(item._id);
    }

    let cartList = cartItems.map(item => { 
        if(item == null){
            return null;
        }
        return (
            <div className={classes.cartItem} key={Math.random()}>
                <div className={classes.itemLeft} >
                    <span className={classes.itemName}>{item?.name}</span>
                    <span className={classes.itemType}><LocalDiningIcon />&nbsp;{item?.foodType}</span>
                    <span className={classes.itemDesc} data-toggle="tooltip" data-placement="top" title={item?.description}>{item?.description}</span>
                    <span className={classes.itemCost}>₹ {item?.cost}</span>
                </div>
                <div className={classes.itemRight}>
                    <img className={classes.image} src="https://static.toiimg.com/thumb/52416693.cms?imgsize=789478&width=800&height=800" alt=""/>
                    <Box className={classes.removeButton}><Button variant='contained' color='secondary' onClick={() => {removeitem(item)}}>Remove</Button></Box>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.listOfItems}>
            {cartList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => {dispatch(removeFromCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
