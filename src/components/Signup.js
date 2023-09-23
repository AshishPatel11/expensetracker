import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { Link } from 'react-router-dom'
function Signup() {
    return (
        <div className='form-container'>

            <div className='bg-white'>
                <div className="form">

                    <div className='animation-div'>

                        <Lottie className="animation" animationData={animationSvg} />
                    </div>
                    <div className='form-class'>
                        <div className='form-title'>
                            <h1>REGISTRATION</h1>
                        </div>
                        <form className="form-body">

                            <div className="username input-fields">
                                <label className="form__label" htmlFor="userName">User Name </label>
                                <input className="form__input" type="text" id="userName" placeholder="User Name" />
                            </div>

                            <div className="firstname input-fields">
                                <label className="form__label" htmlFor="firstName">First Name </label>
                                <input className="form__input" type="text" id="firstName" placeholder="First Name" />
                            </div>


                            <div className="lastname input-fields">
                                <label className="form__label" htmlFor="lastName">Last Name </label>
                                <input type="text" name="" id="lastName" className="form__input" placeholder="LastName" />
                            </div>
                            <div className="email input-fields">
                                <label className="form__label" htmlFor="email">Email </label>
                                <input type="email" id="email" className="form__input" placeholder="Email" />
                            </div>
                            <div className="password input-fields">
                                <label className="form__label" htmlFor="password">Password </label>
                                <input className="form__input" type="password" id="password" placeholder="Password" />
                            </div>
                            <div className="confirm-password input-fields">
                                <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                                <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
                            </div>

                            <div className="footer-btn">
                                <button type="submit" className="submit-btn">Signup</button>
                            </div>
                            <p className='footer-btn mg'>––––––OR––––––</p>
                            <div className="footer-btn mg">
                                <p className='mooli'>Already have an account?</p>
                                <Link className='sign-link' to="/"><p className='sign-link'>Login here!</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signup;