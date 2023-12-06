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
import Home from './components/Home';
import Logout from './components/Logout'
import ExpenseHistory from './components/ExpenseHistory';
import ChatPage from './components/ChatBox/ChatPage'

//this component contain all the routes of the website
function DefinedRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Login />} /> {/* index route (default route) */}
                <Route path='/signup' element={<Signup />} />
                <Route path='/OtpAuth' element={<OtpAuth />} />
                <Route path='/Forgotpass' element={<Forgotpass />} />
                <Route path='/OtpVerify' element={<OtpVerify />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Logout' element={<Logout />} />
                <Route path='/ExpenseHistory' element={<ExpenseHistory />} />
                <Route path='/chats' element={<ChatPage />} />

            </Routes>

        </>
    );
}

export default DefinedRoutes
