import {
    Box,
    Button,
    List,
    ListItem,
    Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from './Styles'

function TempNav() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.navStyles}
        >
            <Typography variant="h4">Foodiez</Typography>
            <List component="nav">
                <Box display="flex">
                    <ListItem
                        className={classes.listStyles}
                    >
                        <Link to="/" className="btn">
                            Login
                        </Link>
                    </ListItem>
                    <ListItem
                        className={`${classes.listStyles} ${classes.registerButtonStyle}`}
                    >
                        <Link
                            to="/register"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                disableRipple={true}
                                disableFocusRipple={true}
                                component={'span'}
                            >
                                Register
                            </Button>
                        </Link>
                    </ListItem>
                </Box>
            </List>
        </Box>
        // <nav>
        //     <h1>Foodiez</h1>
        //     <ul>
        //         <li><Link to='/' className='btn'>Login</Link></li>
        //         <li><Link to='/register' className="btn register">Register</Link></li>
        //     </ul>
        // </nav>
    );
}

export default TempNav;
