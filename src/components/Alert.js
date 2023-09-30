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
                    <form onSubmit={props.func}>
                        <button type='submit' className='alert-btn'>OK</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Alert
