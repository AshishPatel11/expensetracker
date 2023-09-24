import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { Link } from 'react-router-dom'


function Login() {
    const [UserData, setUserData] = useState({});

    //form submit event handlling function
    const handleSubmit = async event => {
        event.preventDefault();

        //fetching API
        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserData)
        });

        const apiObj = await response.json()
        //if API responses error
        if (apiObj.error) {
            alert(apiObj.error);
        }
        //if API responses successfully
        else if (apiObj.userName) {
            alert("Login Successfull !!")
        }
        //if API resonses 500 request
        else {
            alert(apiObj.error.message)
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
                            <h1>LOGIN</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="form-body">

                            <div className="username input-fields">
                                <label className="form__label" htmlFor="userName">User Name </label>
                                <input className="form__input" name='userName' required type="text" id="userName" onChange={onChange} placeholder="User Name" />
                            </div>

                            <div className="password input-fields">
                                <label className="form__label" htmlFor="password">Password </label>
                                <input className="form__input" name='password' required type="password" onChange={onChange} id="password" placeholder="Password" />
                            </div>

                            <div className="footer-btn mg">
                                <Link className='sign-link' to="/OtpAuth"><p className='sign-link'>Forgot Password?</p></Link>
                            </div>

                            <div className="footer-btn">
                                <button type="submit" className="submit-btn">Login</button>
                            </div>

                            <p className='footer-btn mg'>––––––OR––––––</p>

                            <div className="footer-btn mg">
                                <p className='mooli'>Don't have an account?</p>
                                <Link className='sign-link' to="/signup"><p className='sign-link'>Signup here!</p></Link>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login;