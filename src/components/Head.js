import React, { useEffect, useState } from 'react'
import './CSS/Head.css';
import { Bell } from 'lucide-react'
import profile from './assets/profile.png'

const Head = (props) => {
    const [UserData, setUserData] = useState({})

    useEffect(() => {
        let UserSession = JSON.parse(localStorage.getItem("user"));
        if (UserSession) {
            setUserData(UserSession)
        }
    }, [])

    return (
        <header>
            <div className="head-container">
                <h1 className='profile-name'>{props.message ? props.message : "Hello," + UserData.firstName + " " + UserData.lastName}</h1>
                <div className='notification-icon'>
                    <Bell size={40} strokeWidth={1} />
                </div>
                <div className='profile-container'>
                    <img className='profile-img' src={profile} alt='profile'></img>
                    <div className='profile-text'>
                        <h4 className='profile-userName'>{UserData.userName}</h4>
                        <small className='profile-email'>{UserData.email}</small>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Head