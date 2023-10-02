import React from 'react'
import './CSS/Nav.css';
import { LayoutDashboard, Repeat, Wallet, Settings, FileBarChart, LogOut } from 'lucide-react'
import scrimg from './assets/images-removebg-preview.png'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <header>
            <nav className='nav-container'>
                <div className="logo-container">
                    {/* <img className='logo-svg' src={logo} alt='logo'></img> */}
                    <h1 className='logo-title'>Expenzify</h1>
                    <sup>
                        <img className='super-image' src={scrimg} alt='super script'></img>
                    </sup>
                </div>
                <div className='nav-body'>
                    <div className='nav-links'>
                        <ul>

                            <li className='link-list'>
                                <div>
                                    <Link to='/home'>
                                        <div className='link-grid'>
                                            <span>
                                                <LayoutDashboard color="#f0f0f0" />
                                            </span>
                                            <p className='link-text'>Dashboard</p>
                                        </div>
                                    </Link>
                                </div>
                            </li>

                            <li className='link-list'>
                                <div>
                                    <Link to='/Expense'>
                                        <div className='link-grid'>
                                            <span>
                                                <Repeat color="#f0f0f0" />
                                            </span>
                                            <p className='link-text'>Expense</p>
                                        </div>
                                    </Link>
                                </div>
                            </li>

                            <li className='link-list'>
                                <div>
                                    <Link to='/home'>
                                        <div className='link-grid'>
                                            <span>
                                                <Wallet color="#f0f0f0" />
                                            </span>
                                            <p className='link-text'>Income</p>
                                        </div>
                                    </Link>
                                </div>
                            </li>

                            <li className='link-list'>
                                <div>
                                    <Link to='/home'>
                                        <div className='link-grid'>
                                            <span>
                                                <FileBarChart color="#f0f0f0" />
                                            </span>
                                            <p className='link-text'>Reports</p>
                                        </div>
                                    </Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <hr className='line'></hr>
                </div>
                <div className='nav-footer'>
                    <div className='nav-body'>
                        <div className='nav-links'>
                            <ul>
                                <li className='link-list'>
                                    <div>
                                        <Link to='/home'>
                                            <div className='link-grid'>
                                                <span>
                                                    <Settings color="#f0f0f0" />
                                                </span>
                                                <p className='link-text'>Setting</p>
                                            </div>
                                        </Link>
                                    </div>
                                </li>

                                <li className='link-list'>
                                    <div>
                                        <Link to='/Logout'>
                                            <div className='link-grid'>
                                                <span>
                                                    <LogOut color="#f0f0f0" />
                                                </span>
                                                <p className='link-text'>Logout</p>
                                            </div>
                                        </Link>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Nav