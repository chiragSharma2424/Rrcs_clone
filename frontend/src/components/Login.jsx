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

            {/*Login container */}
            <div className="
                        absolute
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[400px]
                        bg-white/80
                        backdrop-blur-sm
                        border
                        border-white/60
                        rounded-lg
                        shadow-2xl
                        p-5
                    ">
                        <div
                        className="
                            bg-sky-400/90
                            text-white
                            text-center
                            py-4
                            mb-6
                            rounded-sm
                        "
                    >
                        <h1 className="text-lg font-medium tracking-wide">
                            LOGIN : LIPI DATA RESOURCES
                        </h1>
                    </div>

                    {/*Username*/}
                    <div className="mb-5">
                        <TextField fullWidth
                            label="Username"
                            variant="outlined"
                            size="small"/>
                    </div>

                    {/*password*/}
                    <div className="mb-4">
                        <TextField fullWidth
                         label="password"
                         variant="outlined"
                         size="small"
                        />
                    </div>
                
            </div>
        </div>
    </>
    )
}

export default Login;