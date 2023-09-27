import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const LoginAuth = () => {
    const navigate = useNavigate()

    let UserSession = localStorage.getItem('user')
    if (!UserSession) {
        alert("Please Login First!!");
        window.location.replace("http://localhost:3000");
    }

}

export default LoginAuth
