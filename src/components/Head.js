import React from 'react'
import './CSS/Head.css';
import { Bell } from 'lucide-react'
import profile from './assets/profile.png'
const Head = () => {
    return (
        <header>
            <div className="head-container">
                <h1 className='profile-name'>Hello, Profilename</h1>
                <div className='notification-icon'>
                    <Bell size={40} strokeWidth={1} />
                </div>
                <div className='profile-container'>
                    <img className='profile-img' src={profile} alt='profile'></img>
                    <div className='profile-text'>
                        <h4 className='profile-userName'>UserName</h4>
                        <small className='profile-email'>Email@gmail.com</small>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Head