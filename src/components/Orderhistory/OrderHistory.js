import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
// import '../styles/OrderHistory.css';
import GetHeaders from '../../utils/headers';
import Moment from 'react-moment';
import 'moment-timezone';
import { Box, makeStyles, Typography, useTheme } from '@material-ui/core';
import useStyles from './Styles'

function OrderHistory() {
    const classes = useStyles();
    const theme = useTheme();

    let [orders, setOrders] = useState([])

    useEffect(() => {
        let isMounted = true;
        if(isMounted){
            axios.get('/api/v1/cart/getOrderHistory', {headers: GetHeaders()}).then(resp => {
                setOrders(resp.data);
            })
        }
        return () => { isMounted = false };
    }, [])

    let ordersList = orders.map(order => {
        if(order.foodItem == null){
            return null;
        }
        return (
            <Box display='flex' justifyContent='space-between' className={classes.orders} key={order._id}>
                <Box>
                    <Typography variant='h6'>{order?.foodItem?.name}</Typography>
                    <br/>
                    <Typography>₹ {order?.foodItem?.cost}</Typography>
                </Box>
                
                <Box className={classes.aboutTime}>
                    ordered at: <Moment  format='ddd DD-MMM-YYYY'>{order?.createdAt}</Moment> - <Moment tz="Asia/Kolkata" format='HH:MM'>{order?.createdAt}</Moment> IST
                </Box>
            </Box>
        )
    });

    return ordersList.length > 0 ? (
        <Box>
            <Typography variant='h6' className={classes.ordersTitle}>Your last 10 Orders</Typography>
            <Box>
                {ordersList}
            </Box>
        </Box>
    ) :  (<Box>
        Loading
    </Box>)

    
}

export default OrderHistory
