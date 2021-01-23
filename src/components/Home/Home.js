import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import FoodItem from '../FoodItem/FoodItem'
// import '../styles/Home.css'
import {connect} from 'react-redux';
import GetHeaders from '../../utils/headers';
import { populateTheCart } from '../../redux/actions/cartActions';
import { Box, makeStyles, Typography } from '@material-ui/core';
import useStyles from './Styles';

function Home({addToCart, role}) {
    const classes = useStyles();

    let [vendors, setVendors] = useState([]);
    let [homeHeader, setHomeHeader] = useState('');
    useEffect(() => {
        let isMounted = true;
        if (isMounted){
            if(role === 'vendor'){
                axios.get('/api/v1/vendor/allVendorsOfUser', {headers: GetHeaders()}).then(response => {
                    setVendors(response.data);
                    setHomeHeader('My Restaurants');
                })
            }else{
                axios.get('/api/v1/vendor/all', {headers: GetHeaders()}).then(response => {
                    setVendors(response.data);
                    setHomeHeader('Top Restaurants');
                })
            }
        }
        return () => { isMounted = false };
    }, [])
    
    useEffect(() => {
        let isMounted = true;
        if (isMounted){
            addToCart(role);
        }
        return () => { isMounted = false };
    }, [])
    
    return (
        <Box className={classes.home}>
            <img className={classes.bannerStyles} src="https://elvino.co.uk/wp-content/uploads/2016/03/Food-banner-2.jpg" alt=""/>
            <h3 className={classes.header}>{homeHeader}</h3>
            <FoodItem vendors={vendors}/>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        role: state.user.roleName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (role) => {dispatch(populateTheCart(role))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
