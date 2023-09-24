import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";

//importing the component for defining the routes
import Login from './components/Login'
import Signup from './components/Signup'
import OtpAuth from './components/OtpAuth'
import Forgotpass from './components/Forgotpass';
import OtpVerify from './components/OtpVerify';
import Nav from './components/Nav';
import Home from './components/Home';


//this component contain all the routes of the website
const DefinedRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={<Login />} /> {/* index route (default route) */}
                <Route path='/signup' element={<Signup />} />
                <Route path='/OtpAuth' element={<OtpAuth />} />
                <Route path='/Forgotpass' element={<Forgotpass />} />
                <Route path='/OtpVerify' element={<OtpVerify />} />
                <Route path='/Nav' element={<Nav />} />
                <Route path='/Home' element={<Home />} />
            </Routes>

        </>
    )
}

export default DefinedRoutes
