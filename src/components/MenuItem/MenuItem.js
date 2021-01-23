import React from 'react'
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/cartActions';
import { Box, Button, makeStyles } from '@material-ui/core';
import useStyles from './Styles';

function MenuItem({menuItems, role, addToCart}) {
    const classes = useStyles();

    let buttonsDiv = (item) => {
        if(role === 'vendor'){
            return(<div>
                {/* <Link to='/'><button className="btn btn-sm btn-info edit__button"></button></Link> */}
            </div>)
        }else{
            return (
                <Box className={classes.addButton}><Button variant='contained' color='primary' onClick={() => {addItem(item)}}>Add</Button></Box>
            )
        }
    }
    
    let addItem = (item) => {
        addToCart(item);
    }

    let menuList = menuItems.map(item => {
        return (
            <div className={classes.cartItem} key={item._id}>
                <div className={classes.itemLeft} >
                    <span className={classes.itemName}>{item.name}</span>
                    <span className={classes.itemType}><LocalDiningIcon />&nbsp;{item.foodType}</span>
                    <span className={classes.itemDesc} data-toggle="tooltip" data-placement="top" title={item.description}>{item.description}</span>
                    <span className={classes.itemCost}>₹ {item.cost}</span>
                </div>
                <div className={classes.itemRight}>
                    <img className={classes.image} src="https://static.toiimg.com/thumb/52416693.cms?imgsize=789478&width=800&height=800" alt=""/>
                    {buttonsDiv(item)}
                </div>
                
            </div>
        )
    })
    return (
        <div>
            {menuList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        role: state.user.roleName,
        items: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addToCart(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
