import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { useNavigate } from 'react-router-dom'
import loadingsvg from './assets/loading.json'
import Nav from './Nav';

function Home() {

    return(

        <>
            <div>
                <Nav />    

                <div>
                    <h1>Welcome</h1>
                </div>
            </div>
            

        
        </>
    )
}

export default Home