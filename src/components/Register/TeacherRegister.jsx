import * as React from 'react';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { post } from '../../API/Reguests';
import RegisterTeacher from '../../classes/registerTeacher.class';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [profileImg, setProfile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // var fullNamePattern = /^[A-Za-z\s]+$/;
    function validation() {
        if (fullName.length > 5 && userName.length>5 && emailPattern.test(email) && passwordPattern.test(password) && password == confPass) {
            return true
        }
        else {
            return false
        }
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        paddingBottom: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up Teachers
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="  "
                                    required
                                    fullWidth
                                    value={fullName} onChange={(e)=>{  setFullName(e.target.value)}}
                                    id="fullName"
                                    label="Full Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={userName} onChange={(e)=>{ setUserName(e.target.value)}}
                                    id="userName"
                                    label="User Name"
                                    name="userName"
                                    autoComplete="user-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={profileImg} onChange={(e)=>{ setProfile(e.target.value)}}
                                    id="profileImg"
                                    label="Profile Image"
                                    name="profileImg"
                                    autoComplete="profileImg"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={email} onChange={(e)=>{ setEmail(e.target.value)}}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={password} onChange={(e)=>{ setPassword(e.target.value)}}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={confPass} onChange={(e)=>{ setConfPass(e.target.value)}}
                                    name="confirm-password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="confirm-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={(e)=>{
                                e.preventDefault()

                                if (validation()) {
                                    
                                    const newTeacher = new RegisterTeacher(fullName,userName,email,password,profileImg)
                                    console.log(newTeacher);
                                    post("teachers",newTeacher)
                                    setFullName("")
                                    setUserName("")
                                    setProfile("")
                                    setEmail("")
                                    setPassword("")
                                    setConfPass("")
                                }
                                else{
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "error",
                                        title: "Hey Teacherss Pls Correct Fill Inputs",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link  href='#' variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}