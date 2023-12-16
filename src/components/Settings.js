import React, { useState } from 'react';
import Nav from './Nav';
import Head from './Head';
import './CSS/ExpenseHistory.css'
import LoginAuth from './LoginAuth';
import Lottie from 'lottie-react';
import Loader from './assets/loading.json'

function Reports() {
    const [Loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"))
    const [UserData, setUserData] = useState(user)
    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true)
        //API update call
        const response = await fetch('http://localhost:5000/api/updateUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserData),
        });
        let apiObj = await response.json();
        if (apiObj.success) {
            alert('Your details has been updated Successfully');
            localStorage.setItem("user", JSON.stringify(UserData))
        }
        else if (apiObj.fail) {
            alert(apiObj.fail)
        }
        else {
            alert(apiObj.error.message)
        }
        setLoading(false)
    }
    const onChange = (event) => {
        setUserData({ ...UserData, [event.target.name]: event.target.value })
    }




    return (
        <>
            <LoginAuth />
            <div className='body-container'>
                <div className="NavBar">
                    <Nav />
                </div>
                <div className='dash-container'>
                    <div>
                        <Head message="Settings" />
                        <div className='margin-space'></div>
                        <div className='history-container'>
                            <h3 className='history-tagname'>Account Settings</h3>
                            <div className='exp-form' encType="multipart/form-data">
                                <form onSubmit={handleSubmit}>
                                    <div className="title"><p>Change details related to the Account</p></div>
                                    <div className=''>
                                        <div className="">
                                            <label className="lable-tag" htmlFor="userName">UserName </label>
                                            <input className="input-tag" onChange={onChange} name="userName" required type="text" id="userName" value={UserData.userName} placeholder="User Name" />
                                        </div>
                                        <div className="">
                                            <label className="lable-tag" htmlFor="firstName">First Name </label>
                                            <input className="input-tag" onChange={onChange} name="firstName" required type="text" id="firstName" value={UserData.firstName} placeholder="First Name" />
                                        </div>
                                        <div className="">
                                            <label className="lable-tag" htmlFor="lastName">Last Name </label>
                                            <input className="input-tag" onChange={onChange} name="lastName" required type="text" id="lastName" value={UserData.lastName} placeholder="Last Name" />
                                        </div>
                                        <div className="">
                                            <label className="lable-tag" htmlFor="email">Email </label>
                                            <input className="input-tag" onChange={onChange} name="email" required type="email" id="email" value={UserData.email} placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="expense-submit">
                                        <button type="submit" className="expense-submit-btn">Submit</button>
                                    </div>
                                </form>
                                {Loading &&
                                    <div className='loader-container center'>
                                        <div className='loader'>
                                            <Lottie animationData={Loader} />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Reports