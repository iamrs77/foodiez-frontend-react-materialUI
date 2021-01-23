import axios from "../../utils/axios";
import React, { useState } from "react";
// import '../styles/Login.css';
import TempNav from "../TempNav/TempNav";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import {
    Box,
    Button,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";
import useStyles from './Styles';

function Login(props) {
    let classes = useStyles();

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const cookies = new Cookies();

    let login = (e) => {
        e.preventDefault();
        axios
            .post("/api/v1/user/signIn", {
                email,
                password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    cookies.set(
                        "jwt",
                        response.data.accessToken,
                        { path: "/", maxAge: 24 * 60 * 60 }
                    );
                    props.history.push("/home");
                }
            })
            .catch((err) => {
                document.getElementById(
                    "error"
                ).innerHTML = err?.response?.data?.error
                    ? err.response.data.error
                    : "";
            });
    };

    return (
        <Paper
            elevation={0}
            className={classes.fullScreenHeight}
        >
            <TempNav />
            <Box className={classes.loginContainerStyle} display='flex' flexDirection='column'>
                <Typography variant='h4'>Login</Typography>
                <Box
                    id="error"
                    color='primary'  //not working
                ></Box>
                <form onSubmit={login}>
                    <Typography variant='h6' className={classes.typographyMargins}>Email</Typography>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        required
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className={classes.textField}
                    />
                    <Typography variant='h6' className={classes.typographyMargins}>Password</Typography>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        required
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className={classes.textField}
                    />
                    <button className={classes.loginButtonStyle}>
                        Login
                    </button>
                    {/* <button type='submit' className="login__button" onClick={login}>Login</button> */}
                </form>
            </Box>
        </Paper>
    );
}

export default withRouter(Login);

// {/* <div className="login">
//             <TempNav />
//             {/* <Button variant='contained' color='primary'>hi</Button> */}
//             <div className="login__container">
//                 <h1>Login</h1>
//                 <div id="error" className="danger-text"></div>
//                 <form onSubmit={login}>
//                     <h5>Email</h5>
//                     <input
//                         type="email"
//                         name='email'
//                         id="email"
//                         value={email}
//                         required
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <h5>Password</h5>
//                     <input
//                         type="password"
//                         name='password'
//                         id="password"
//                         value={password}
//                         required
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button className="login__button">Login</button>
//                     {/* <button type='submit' className="login__button" onClick={login}>Login</button> */}
//                 </form>
//             </div>
//         </div> */}
