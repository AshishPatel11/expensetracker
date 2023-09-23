import React from 'react'
import './CSS/Nav.css';
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <header>
            <nav>
                <div class="logo">
                    <img src={logo} alt="logo" />
                </div>

                <ul class="list-item">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/Income">Income</Link></li>
                    <li><Link to="/">Expense</Link></li>
                    <li><Link to="/">Usage</Link></li>
                    <li><Link to="/">Notifications</Link></li>
                    <li><Link to="/">Profile</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Nav