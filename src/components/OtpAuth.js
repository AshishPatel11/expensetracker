import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { Link } from 'react-router-dom'

function OtpAuth() {
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
                            <h1>CHANGE PASSWORD</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="form-body">

                            <div className="username input-fields">
                                <label className="form__label" htmlFor="userName">User Name </label>
                                <input className="form__input" name="userName" required type="text" onChange={onChange} id="userName" placeholder="User Name" />
                            </div>

                            <div className="otp input-fields">
                                <label className="form__label" htmlFor="userName">Enter OTP</label>
                                <input className="form__input" name="userName" required type="text" onChange={onChange} id="userName" placeholder="User Name" />
                            </div> 

                            <div className="footer-btn">
                                <button type="submit" className="submit-btn">Verify OTP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default OtpAuth;