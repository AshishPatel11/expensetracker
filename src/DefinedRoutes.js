import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";

//importing the component for defining the routes
import Login from './components/Login'
import Signup from './components/Signup'
import OtpAuth from './components/OtpAuth'

//import Forgotpass from './components/Forgotpass';

//this component contain all the routes of the website
const DefinedRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={<Login />} /> {/* index route (default route) */}
                <Route path='/signup' element={<Signup />} />
                <Route path='/OtpAuth' element={<OtpAuth />} />
            </Routes>

        </>
    )
}

export default DefinedRoutes
