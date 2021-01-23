import axios from '../../utils/axios';
import React, { useState } from 'react'
// import '../styles/Login.css';
// import '../styles/Register.css';
import TempNav from '../TempNav/TempNav';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import useStyles from './Styles'

function Register(props) {
    const classes = useStyles();
    let [email, setEmail] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirm, setPasswordConfirm] = useState('');
    
    const cookies = new Cookies();
    
    let register = (e, userRole) => {
        e.preventDefault()
        if(password !== passwordConfirm){
            document.getElementById('error').innerText = "Password don't match";
            return;
        }else {
            document.getElementById('error').innerText = '';
        }

        axios.post('/api/v1/user/register',{email, firstName, lastName, password, passwordConfirm, role: userRole}).then(res => {
            cookies.set('jwt', res.data.accessToken, {path: '/', maxAge: 24*60*60});
            props.history.push('/home');
        }).catch(err=>{
            document.getElementById('error').innerHTML = err.response.data.error ? err.response.data.error : '';
        })
    }

    return (
        <Paper
            elevation={0}
            className={classes.fullScreenHeight}
        >
            <TempNav />
            <Box className={classes.loginContainerStyle} display='flex' flexDirection='column'>
            {/* <div className="login__container register__container"> */}
                <h1>Register</h1>
                <div id="error" className="danger-text"></div>
                <form method='post' onSubmit={() => {}}>
                    <Typography variant='h6' className={classes.typographyMargins}>Email</Typography>
                    <input 
                        type="email" 
                        name='email' 
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.textField}
                    />
                    <Typography variant='h6' className={classes.typographyMargins}>First Name</Typography>
                    <input 
                        type="text" 
                        name='firstName' 
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        className={classes.textField}
                    />
                    <Typography variant='h6' className={classes.typographyMargins}>Last Name</Typography>
                    <input 
                        type="text" 
                        name='lastName' 
                        value={lastName}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        className={classes.textField}
                    />
                    <Typography variant='h6' className={classes.typographyMargins}>Password</Typography>
                    <input 
                        type="password" 
                        name='password' 
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className={classes.textField}
                    />
                    <Typography variant='h6' className={classes.typographyMargins}>Confirm Password</Typography>
                    <input 
                        type="password" 
                        name='passwordConfirm' 
                        value={passwordConfirm}
                        required
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        className={classes.textField}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <button className={classes.registerButtonStyle} onClick={(e) => {register(e, 'user')}}>Register</button>
                        <button className="btn vendor__button" onClick={(e) => {register(e, 'vendor')}}>Register as Vendor!</button>
                    </Box>
                    
                    <div id="error"></div>
                </form>
            </Box>
        </Paper>
    )
}

export default withRouter(Register)
