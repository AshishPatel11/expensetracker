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
                        <input className="" name="ExpenseAmount" required type="text" id="ExpenseAmount" placeholder="Expense Name" />
                    </div>
                    <div className="">
                        <label className="" htmlFor="Catagory">Catagory </label>
                        <input className="" name="Catagory" required type="text" id="Catagorry" placeholder="Expense Name" />
                    </div>
                    <div className="">
                        <label className="" htmlFor="ExpenseDate">Expense Date </label>
                        <input className="" name="ExpenseDate" required type="text" id="ExpenseDate" placeholder="Expense Name" />
                    </div>
                    <div className="">
                        <label className="" htmlFor="ExpName">Expense Name </label>
                        <input className="" name="ExpenseName" required type="text" id="ExpName" placeholder="Expense Name" />
                    </div>
                    <div className="">
                        <label className="" htmlFor="ExpenseDescription">Expense Description</label>
                        <input className="" name="ExpenseDescription" required type="text" id="ExpenseDescription" placeholder="Expense Name" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewExpense
