import React from 'react'
import '../CSS/NewExpense.css'

const NewExpense = () => {
    return (
        <>
            <div className='exp-form'>
                <form>
                    <div className="">
                        <label className="" htmlFor="ExpenseName">Expense Name </label>
                        <input className="" name="ExpenseName" required type="text" id="ExpenseName" placeholder="Expense Name" />
                    </div>
                    <div className="">
                        <label className="" htmlFor="ExpenseAmount"> Expense Amount </label>
                        <input className="" name="ExpenseAmount" required type="text" id="ExpenseAmount" placeholder="Expense Amount" />
                    </div>
                    <div className="">
                        <label className="" htmlFor="Catagory">Catagory </label>
                        <input className="" name="Catagory" required type="text" id="Catagorry" placeholder="Catagory" />
                    </div>
                    <div className="">
                        <label className="" htmlFor="ExpenseDate">Expense Date </label>
                        <input className="" name="ExpenseDate" required type="Date" id="ExpenseDate" placeholder="Expense Date" />
                    </div>
                    <div className="">
                        <label className="" htmlFor="ExpenseDescription">Expense Description</label>
                        <input className="" name="ExpenseDescription" required type="text" id="ExpenseDescription" placeholder="Expense Description" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewExpense
