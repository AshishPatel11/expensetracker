import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { useNavigate } from 'react-router-dom'
import loadingsvg from './assets/loading.json'

function OtpVerify() {

    const [UserData, setUserData] = useState({});
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const [OTP, userlog] = window.history.state.usr

    //form submit event handlling function
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        if (OTP !== UserData.otp) {
            setLoading(false)
            alert("Wrong OTP Entered!")
        }
        else {
            navigate("/Forgotpass", { state: userlog })
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
                            <h1>FORGOT PASSWORD</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="form-body">

                            <div className="OTP input-fields">
                                <label className="form__label" htmlFor="userName">OTP </label>
                                <input className="form__input" name="otp" required type="text" onChange={onChange} id="otp" placeholder="Enter OTP" />
                            </div>

                            <div className="footer-btn">
                                <button type="submit" className="submit-btn">Verify</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {Loading &&
                <div className='loader-container'>
                    <div className='loader'>
                        <Lottie animationData={loadingsvg} />
                    </div>
                </div>
            }
        </div>

    )
}
export default OtpVerify;