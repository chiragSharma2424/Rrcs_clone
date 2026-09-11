import React from "react";
import { useState } from 'react'
import LoginBg from "../assets/images/RS_BG_Login.jpeg";
import { TextField, Button, Checkbox, FormControlLabel, InputAdornment, IconButton } from '@mui/material'

function Login() {
    return (
    <>
       <div className="w-screen h-screen overflow-hidden relative">
            <img 
                src={LoginBg} 
                alt="Background image" 
                className="w-full h-full object-cover object-center"
            />
        </div>
    </>
    )
}

export default Login;