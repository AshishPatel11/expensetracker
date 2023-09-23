import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { Link } from 'react-router-dom'

function Signup() {
    const [UserData, setUserData] = useState({});

    //form submit event handlling function
    const handleSubmit = async (event) => {
        event.preventDefault();
        //if password & confirm password do not match
        if (UserData.password !== UserData.cpassword) {
            alert("Both Password should be same!!")
        }
        else {

            //fetching API
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(UserData),
            });

            const apiObj = await response.json()
            //if API responses error
            if (apiObj.error) {
                alert(apiObj.error);
            }
            //if API responses successfully
            else if (apiObj.uid) {
                alert("Registration Successfull !!");
            }
            //if API responses 500
            else {
                alert(apiObj.error.message);
            }
        }
    }


    //input change event handling function
    const onChange = (event) => {
        setUserData({ ...UserData, [event.target.name]: event.target.value })
    }


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

                        <form onSubmit={handleSubmit} className="form-body">

                            <div className="username input-fields">
                                <label className="form__label" htmlFor="userName">User Name </label>
                                <input className="form__input" name="userName" required type="text" onChange={onChange} id="userName" placeholder="User Name" />
                            </div>

                            <div className="firstname input-fields">
                                <label className="form__label" htmlFor="firstName">First Name </label>
                                <input className="form__input" name="firstName" required type="text" onChange={onChange} id="firstName" placeholder="First Name" />
                            </div>

                            <div className="lastname input-fields">
                                <label className="form__label" htmlFor="lastName">Last Name </label>
                                <input type="text" id="lastName" name="lastName" required className="form__input" onChange={onChange} placeholder="LastName" />
                            </div>

                            <div className="email input-fields">
                                <label className="form__label" htmlFor="email">Email </label>
                                <input type="email" id="email" name='email' required className="form__input" onChange={onChange} placeholder="Email" />
                            </div>

                            <div className="password input-fields">
                                <label className="form__label" htmlFor="password">Password </label>
                                <input className="form__input" name='password' required type="password" id="password" onChange={onChange} placeholder="Password" />
                            </div>

                            <div className="confirm-password input-fields">
                                <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                                <input className="form__input" name="cpassword" required type="password" id="confirmPassword" onChange={onChange} placeholder="Confirm Password" />
                            </div>

                            <div className="footer-btn">
                                <button type="submit" className="submit-btn">Signup</button>
                            </div>

                            <p className='footer-btn mg'>––––––OR––––––</p>

                            <div className="footer-btn mg">
                                <p className='mooli'>Already have an account?</p>

                                <Link className='sign-link' to="/">
                                    <p className='sign-link'>Login here!</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signup;