import React from 'react'
import './CSS/Nav.css';
import { LayoutDashboard, Repeat, Wallet, Settings } from 'lucide-react'
import logo from './assets/logo-svg.svg'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <header>
            <nav className='nav-container'>
                <div className="logo-container">
                    <img className='logo-svg' src={logo} alt='logo'></img>
                </div>
                <div className='nav-body'>
                    <div className='nav-links'>
                        <ul>

                            <li className='link-list'>
                                <div>
                                    <LayoutDashboard color="#f0f0f0" />
                                </div>
                                <div>
                                    <Link to='/home'>Dashboard</Link>
                                </div>
                            </li>

                            <li className='link-list'>
                                <div>
                                    <Repeat color="#f0f0f0" />
                                </div>
                                <div>
                                    <Link to='/home'>Expense</Link>
                                </div>
                            </li>

                            <li className='link-list'>
                                <div>
                                    <Wallet color="#f0f0f0" />
                                </div>
                                <div>
                                    <Link to='/home'>Income</Link>
                                </div>
                            </li>

                            <li className='link-list'>
                                <div>
                                    <Settings color="#f0f0f0" />
                                </div>
                                <div>
                                    <Link to='/home'>Setting</Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='nav-footer'>

                </div>
            </nav>
        </header>

    )
}

export default Nav