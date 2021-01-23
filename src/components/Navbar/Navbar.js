import React from "react";
// import '../styles/Navbar.css';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { connect } from "react-redux";
import { Badge, Box, makeStyles } from "@material-ui/core";
import useStyles from './Styles';

function Navbar(props) {
    const classes = useStyles();

    let handleLogout = async (e) => {
        let cookies = new Cookies();
        cookies.remove("jwt", { path: "/" });
        props.history.push("/login");
    };

    return (
        <Box
            display="flex"
            boxShadow={2}
            alignItems="center"
            justifyContent="space-between"
            className={classes.navStyles}
        >
            <Link to="/home">
                <Box>
                    <img
                        height="40"
                        src={require("../../images/logo.jpg")}
                        alt=""
                    />
                </Box>
            </Link>

            <Box
                className={classes.navbarRight}
                display="flex"
                alignItems="center"
            >
                <Link to="/home">
                    <Box component="span" className="btn">
                        Home
                    </Box>
                </Link>
                <Link
                    to="/"
                    onClick={handleLogout}
                >
                    <Box component='span' className="btn">Logout</Box>
                </Link>
                <Link to="/cart" style={{color: 'black'}}>
                    <Box className="cart__btn">
                        <Badge
                            badgeContent={
                                props?.items?.length
                            }
                            max={99}
                            color="primary"
                        >
                            <ShoppingBasketIcon className="basket__icon" />
                        </Badge>
                    </Box>
                </Link>
            </Box>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.cartItems,
    };
};

export default connect(mapStateToProps)(withRouter(Navbar));
