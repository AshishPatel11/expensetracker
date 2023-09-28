import React from 'react'
import './CSS/Card.css'


const Card = (props) => {
    return (
        <>
            <div className='card-container'>
                <div className='card-data'>
                    <p className='card-heading'>{props.heading}</p>
                    <h1 className='card-amt'>{props.amount}</h1>
                </div>
            </div>
        </>
    )
}

export default Card
