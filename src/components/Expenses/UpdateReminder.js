import React, { useState, useEffect } from 'react'
import '../CSS/NewExpense.css'
import Lottie from 'lottie-react'
import Loader from '../assets/loading.json'


const UpdateReminder = (props) => {
    //Hooks defination
    const intialRem = {
        Category: "",
        ExpenseAmount: "",
        ReminderDate: "",
        ExpenseName: "",
    }
    const [ReminderData, setReminderData] = useState(props.updateDetails);
    const [UserData, setUserData] = useState({})
    const [Loading, setLoading] = useState(false);
    //Genrating the Option tag for the category of option with map
    const Category = ["Entertaintment", "Groceries", "Education", "Personal Care", "Health", "Fitness", "Kids", "Food & Dining", "Bills & Utilities", "Auto & Transport", "Taxes", "Investment", "Trips", "Petcare", "Clothing", "Beauty", "HouseHold", "Air tickets", "Vehicle", "Hotel", "Petrol & Gas", "Loans & EMI", "Rents", "Miscellaneous"];

    const CategoryList = Category.map((item, index) => {
        return <option key={index} value={item}> {item} </option>
    })

    useEffect(() => {
        let UserSession = JSON.parse(localStorage.getItem("user"));
        if (UserSession) {
            setUserData(UserSession)
        }
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:5000/api/updateReminder", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...ReminderData, uid: UserData.uid })
        })

        let apiObj = await response.json();
        if (apiObj.success) {
            alert('Your Reminder has been updated Successfully');
        }
        else if (apiObj.fail) {
            alert(apiObj.fail)
        }
        else {
            alert(apiObj.error.message)
        }
        setReminderData(intialRem)
    }

    const onChange = event => {
        setReminderData({ ...ReminderData, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className='exp-form'>
                <form onSubmit={handleSubmit}>
                    <div className="title"><p>*Make changes as per your need to update the reminder</p></div>

                    <div>
                        <div className="">
                            <label className="lable-tag" htmlFor="ExpenseName">Expense Name </label>
                            <input className="input-tag" value={ReminderData.ExpenseName} onChange={onChange} name="ExpenseName" required type="text" id="ExpenseName" placeholder="Expense Name" />
                        </div>
                        <div className="">
                            <label className="lable-tag" htmlFor="ExpenseAmount"> Expense Amount </label>
                            <input className="input-tag" value={ReminderData.ExpenseAmount} onChange={onChange} name="ExpenseAmount" required type="number" id="ExpenseAmount" placeholder="Expense Amount" />
                        </div>
                        <div className="">
                            <label className="lable-tag" htmlFor="Category">Category </label>

                            <select className="input-tag" onChange={onChange} value={ReminderData.Category} name="Category" required id="Category" placeholder="Category" >
                                <option hidden>Select Category</option>
                                {CategoryList}
                            </select>
                        </div>
                        <div className="">
                            <label className="lable-tag" htmlFor="ReminderDate">Reminder Date </label>
                            <input className="input-tag" value={ReminderData.ReminderDate} onChange={onChange} name="ReminderDate" required type="datetime-local" id="ReminderDate" placeholder="Reminder Date" />
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

export default UpdateReminder
