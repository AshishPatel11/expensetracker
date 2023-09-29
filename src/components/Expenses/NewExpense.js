import React from 'react'
import '../CSS/NewExpense.css'

const NewExpense = () => {
    return (
        <>
            <div className='exp-form'>
                <form>
                    <div className="title"><p>Fill in the appropriate details to log you expenses.</p></div>
                    <div className="">
                        <label className="lable-tag" htmlFor="ExpenseName">Expense Name </label>
                        <input className="input-tag" name="ExpenseName" required type="text" id="ExpenseName" placeholder="Expense Name" />
                    </div>
                    <div className="">
                        <label className="lable-tag" htmlFor="ExpenseAmount"> Expense Amount </label>
                        <input className="input-tag" name="ExpenseAmount" required type="text" id="ExpenseAmount" placeholder="Expense Amount" />
                    </div>
                    <div className="">
                        <label className="lable-tag" htmlFor="Catagory">Catagory </label>
                        <input className="input-tag" name="Catagory" required type="text" id="Catagorry" placeholder="Catagory" />
                    </div>
                    <div className="">
                        <label className="lable-tag" htmlFor="ExpenseDate">Expense Date </label>
                        <input className="input-tag" name="ExpenseDate" required type="Date" id="ExpenseDate" placeholder="Expense Date" />
                    </div>
                    <div className="">
                        <label className="lable-tag" htmlFor="ExpenseDescription">Expense Description</label>
                        <input className="input-tag" name="ExpenseDescription" required type="text" id="ExpenseDescription" placeholder="Expense Description" />
                    </div>
                    <div className="expense-submit">
                         <button type="submit" className="expense-submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewExpense
