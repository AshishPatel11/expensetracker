import React, { useState } from 'react';
function Login() {
    return (
        <div className="form">
            <div>

            </div>
            <form className="form-body">
                <div className="username">
                    <label className="form__label" for="UserName">User Name </label>
                    <input className="form__input" type="text" id="UserName" placeholder="User Name" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" />
                </div>
                <div class="footer">
                    <button type="submit" class="btn">Register</button>
                </div>
            </form>
        </div>
    )
}
export default Login;