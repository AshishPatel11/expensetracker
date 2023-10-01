import React, { useState } from 'react'
import '../CSS/NewExpense.css'
import Lottie from 'lottie-react'
import Loader from '../assets/loading.json'

const NewReminder = () => {
    //Hooks defination
    const [ReminderData, setReminderData] = useState();
    const [Loading, setLoading] = useState(false);
    //Genrating the Option tag for the category of option with map
    const Category = ["Entertaintment", "Groceries", "Education", "Personal Care", "Health", "Fitness", "Kids", "Food & Dining", "Bills & Utilities", "Auto & Transport", "Taxes", "Investment", "Trips", "Petcare", "Clothing", "Beauty", "HouseHold", "Air tickets", "Vehicle", "Hotel", "Petrol & Gas", "Loans & EMI", "Rents", "Miscellaneous"];

    const CategoryList = Category.map((item, index) => {
        return <option key={index} value={item}> {item} </option>
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:5000/api/reminder", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ReminderData)
        })

        let apiObj = await response.json();
        if (apiObj.ExpenseId) {
            alert('Your Reminder has been added Successfully');
        }
        else if (apiObj.error) {
            alert(apiObj.error)
        }
        else {
            alert(apiObj.error.message)
        }
    }

    const onChange = event => {
        setReminderData({ ...ReminderData, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className='exp-form'>
                <form onSubmit={handleSubmit}>
                    <div className="title"><p>Fill in the appropriate details to log you expenses.</p></div>

                    <div>
                        <div className="">
                            <label className="lable-tag" htmlFor="ExpenseName">Expense Name </label>
                            <input className="input-tag" onChange={onChange} name="ExpenseName" required type="text" id="ExpenseName" placeholder="Expense Name" />
                        </div>
                        <div className="">
                            <label className="lable-tag" htmlFor="ExpenseAmount"> Expense Amount </label>
                            <input className="input-tag" onChange={onChange} name="ExpenseAmount" required type="number" id="ExpenseAmount" placeholder="Expense Amount" />
                        </div>
                        <div className="">
                            <label className="lable-tag" htmlFor="Category">Category </label>

                            <select className="input-tag" onChange={onChange} name="Category" required id="Category" placeholder="Category" >
                                <option hidden>Select Category</option>
                                {CategoryList}
                            </select>
                        </div>
                        <div className="">
                            <label className="lable-tag" htmlFor="ReminderDate">Reminder Date </label>
                            <input className="input-tag" onChange={onChange} name="ReminderDate" required type="Date" id="ReminderDate" placeholder="Reminder Date" />
                        </div>
                    </div>

                    <div className="expense-submit">
                        <button type="submit" className="expense-submit-btn">Submit</button>
                    </div>
                </form>
                {Loading &&
                    <div className='loader-container'>
                        <div className='loader'>
                            <Lottie animationData={Loader} />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default NewReminder
