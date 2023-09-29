import React from 'react'
import '../CSS/NewExpense.css'

const NewExpense = () => {
    return (
        <>
            <div className='exp-form'>
                <form>
                    <div className="">
                        <label className="" htmlFor="ExpName">Expense Name </label>
                        <input className="" name="ExpenseName" required type="text" id="ExpName" placeholder="Expense Name" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewExpense
