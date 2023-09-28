import React from 'react'
import './CSS/Alert.css'
const Alert = (props) => {
    return (
        <>
            <div className='alert-screen'>
                <div className='alert-box'>
                    <p className='alert-msg'>
                        {props.message}
                    </p>
                    <button className='alert-btn' onClick={props.func}>OK</button>
                </div>
            </div>
        </>
    )
}

export default Alert
