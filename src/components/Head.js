import React from 'react'
import './CSS/Head.css';
import {Bell} from 'lucide-react'
import profile from './assets/profile.png'
const Head = () => {
    return (
        <header>
                <div className="head-container">
                    <h1 className='profile-name'>Hello, Profilename</h1>
                    <div className='notification-icon'>
                         <Bell />
                  </div>
                         <img className='profile-img' src={profile} alt='profile'></img>
                </div>
            </header>
            );
        }

export default Head