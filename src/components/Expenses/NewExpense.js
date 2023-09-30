import React, { useId, useState } from 'react'
import '../CSS/NewExpense.css'
import Lottie from 'lottie-react'
import Loader from '../assets/loading.json'
import DragDropFiles from './DragDropFile'

const NewExpense = () => {

    const [ExpenseData, setExpenseData] = useState();
    const [Loading, setLoading] = useState(false);



    //Genrating the Option tag for the category of option with map
    const Category = ["Entertaintment", "Groceries", "Education", "Personal Care", "Health", "Fitness", "Kids", "Food & Dining", "Bills & Utilities", "Auto & Transport", "Taxes", "Investment", "Trips", "Petcare", "Clothing", "Beauty", "HouseHold", "Air tickets", "Vehicle", "Hotel", "Petrol & Gas", "Loans & EMI", "Rents", "Miscellaneous"];

    const CategoryList = Category.map((item, index) => {
        return <option key={index} value={item}> {item} </option>
    })


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', event.target.files);

        console.log(formData)
        const response = await fetch("http://localhost:5000/api/expenses", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ExpenseData)
        })

        let apiObj = await response.json();
        if (apiObj.ExpenseId) {
            alert('Your Expense has been added Successfully');
        }
        else if (apiObj.error) {
            alert(apiObj.error)
        }
        else {
            alert(apiObj.error.message)
        }
    }

    const onChange = event => {
        setExpenseData({ ...ExpenseData, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className='exp-form'>
                <form onSubmit={handleSubmit}>
                    <div className="title"><p>Fill in the appropriate details to log you expenses.</p></div>
                    <div className='seprator'>
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
                                <label className="lable-tag" htmlFor="ExpenseDate">Expense Date </label>
                                <input className="input-tag" onChange={onChange} name="ExpenseDate" required type="Date" id="ExpenseDate" placeholder="Expense Date" />
                            </div>
                            <div className="">
                                <label className="lable-tag" htmlFor="ExpenseDescription">Expense Description</label>
                                <input className="input-tag" onChange={onChange} name="ExpenseDescription" required type="text" id="ExpenseDescription" placeholder="Expense Description" />
                            </div>
                        </div>
                        <div>
                            <DragDropFiles />
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

export default NewExpense
