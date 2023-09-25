import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { useNavigate } from 'react-router-dom'
import loadingsvg from './assets/loading.json'
import Nav from './Nav';

function Home() {
    return (
        <>
            <div className='body-container'>
                <div className="NavBar">
                    <Nav />
                </div>
                <div>
                    <div>

                        <p>Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home