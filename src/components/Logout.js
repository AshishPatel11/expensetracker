import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        sessionStorage.clear();
        localStorage.clear()
        alert("Logged Out!!")
        navigate('/')
    })
}

export default Logout
