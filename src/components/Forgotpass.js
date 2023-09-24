import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { useNavigate } from 'react-router-dom'
import loadingsvg from './assets/loading.json'

function Forgotpass() {
    const [UserData, setUserData] = useState({});
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const userName = window.history.state.usr.userName;

    //form submit event handlling function
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        //if password & confirm password do not match
        if (UserData.password !== UserData.cpassword) {
            setLoading(false)
            alert("Both Password should be same!!")
        }

        else {

            //fetching API
            const response = await fetch('http://localhost:5000/api/updatepass', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...UserData, userName: userName }),
            });

            const apiObj = await response.json();
            if (apiObj.success) {
                setLoading(false)
                alert(`Password updated successfully`);
                navigate("/");
            }
            else if (apiObj.fail) {
                setLoading(false)
                alert(apiObj.fail)
                navigate("/");
            }
            else {
                setLoading(false)
                alert(apiObj.error.message)
                navigate("/")
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

                            <div className="password input-fields">
                                <label className="form__label" htmlFor="password">Password </label>
                                <input className="form__input" name='password' required type="password" id="password" onChange={onChange} placeholder="Password" />
                            </div>

                            <div className="confirm-password input-fields">
                                <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                                <input className="form__input" name="cpassword" required type="password" id="confirmPassword" onChange={onChange} placeholder="Confirm Password" />
                            </div>

                            <div className="footer-btn">
                                <button type="submit" className="submit-btn">Reset</button>
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
export default Forgotpass;