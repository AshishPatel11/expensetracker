import React, { useState } from 'react'
import './CSS/Card.css'
import { MoreVertical, X } from 'lucide-react'


const Card = (props) => {
    const defaultdata = { BudgetAmt: "" }
    const [updateFormState, setUpdateFormState] = useState(false)
    const [BudgetData, setBudgetData] = useState(defaultdata)

    const showUpdatebudget = (event) => {
        setUpdateFormState(!updateFormState)
        console.log("done")
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        setBudgetData(defaultdata)
    }
    const onChange = (event) => {
        setBudgetData({ ...BudgetData, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className='card-container'>
                <div className='card-data'>
                    <div className='card-header'>
                        <p className='card-heading'>{props.heading}</p>
                        {props.option &&
                            <div className='more-option'>
                                <MoreVertical color='#f0f0f0' />
                                <div onClick={showUpdatebudget} className='option-list'>
                                    <p className='option-item'>Update Budget</p>
                                </div>
                            </div>
                        }
                    </div>
                    <h1 className='card-amt'>{props.amount}</h1>
                </div>
            </div>

            {updateFormState &&
                < div className='Exp-form-container bgt-form'>
                    <div className='form-head'>
                        <p className='form-title'>Set Budget</p>
                        <X onClick={() => { setUpdateFormState(false) }} color="#666666" strokeWidth={3} />
                    </div>
                    <div className='exp-form'>
                        <form onSubmit={handleSubmit}>
                            <div className='seprator'>
                                <div className="">
                                    <label className="lable-tag" htmlFor="ExpenseName">Budget Amount</label>
                                    <input className="input-tag" value={BudgetData.BudgetAmt} onChange={onChange} name="BudgetAmt" required type="text" id="ExpenseName" placeholder="Expense Name" />
                                    <div className="expense-submit">
                                        <button type="submit" className="expense-submit-btn bgt-submit-btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default Card
