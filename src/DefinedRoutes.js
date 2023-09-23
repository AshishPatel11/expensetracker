import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from './components/Login'
import Signup from './components/Signup'
const DefinedRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>

        </>
    )
}

export default DefinedRoutes
