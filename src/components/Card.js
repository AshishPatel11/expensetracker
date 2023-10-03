import React from 'react'
import './CSS/Card.css'
import { MoreVertical } from 'lucide-react'


const Card = (props) => {
    return (
        <>
            <div className='card-container'>
                <div className='card-data'>
                    <div className='card-header'>
                        <p className='card-heading'>{props.heading}</p>
                        {props.option &&
                            <div className='more-option'>
                                <MoreVertical color='#f0f0f0' />
                                <div className='option-list'>
                                    <p className='option-item'>Update Budget</p>
                                </div>
                            </div>
                        }
                    </div>
                    <h1 className='card-amt'>{props.amount}</h1>
                </div>
            </div>
        </>
    )
}

export default Card
