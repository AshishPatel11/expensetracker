import React, { useState } from 'react';
import Nav from '../Nav';
import Head from '../Head';
import '../CSS/ExpenseHistory.css'
import LoginAuth from '../LoginAuth';
import ExpenseTable from '../Expenses/ExpenseTable';
import ReminderTable from '../Reminders/ReminderTable'
import { utils, writeFile } from 'xlsx'

function Reports() {
    const [ExpenseData, setExpenseData] = useState({});
    const [SearchData, setSearchData] = useState();
    const [UserData, setUserData] = useState({})
    const [Expenselist, setExpenselist] = useState({})
    const [Reminderlist, setRemiderlist] = useState({})


    //Genrating the Option tag for the category of option with map
    const Category = ["Entertaintment", "Groceries", "Education", "Personal Care", "Health", "Fitness", "Kids", "Food & Dining", "Bills & Utilities", "Auto & Transport", "Taxes", "Investment", "Trips", "Petcare", "Clothing", "Beauty", "HouseHold", "Air tickets", "Vehicle", "Hotel", "Petrol & Gas", "Loans & EMI", "Rents", "Miscellaneous"];

    const CategoryList = Category.map((item, index) => {
        return <option key={index} value={item}> {item} </option>
    })

    const handleSubmit = event => {
        event.preventDefault()
        setSearchData(ExpenseData.search ? ExpenseData.search : "")
        console.log(ExpenseData)
    }

    const onChange = event => {
        setExpenseData({ ...ExpenseData, [event.target.name]: event.target.value })
    }


    let getDataFromExpenseTable = (data) => {
        setExpenselist(data)
    }
    let getDataFromReminderTable = (data) => {
        setRemiderlist(data)
    }

    const genReport = event => {
        const wb = utils.book_new(),
            ws = utils.json_to_sheet(Expenselist),
            ws1 = utils.json_to_sheet(Reminderlist);

        utils.book_append_sheet(wb, ws, "ExpenseData");
        utils.book_append_sheet(wb, ws1, "ReminderData")

        writeFile(wb, "Reports.xlsx")
    }
    return (
        <>
            <LoginAuth />
            <div className='body-container'>
                <div className="NavBar">
                    <Nav />
                </div>
                <div className='dash-container'>
                    <div>
                        <Head message="Reports" />
                        <div className='margin-space'></div>
                        <div className='history-container'>
                            <ExpenseTable ExpenseList={getDataFromExpenseTable} search={SearchData} category={ExpenseData} />
                        </div>
                        <div>
                            <div className='recent-container'>
                                <ReminderTable Reminderlist={getDataFromReminderTable} head="Recent Expenses" />
                            </div>
                        </div>
                        <div className='btn-container'>
                            <button onClick={genReport} className='search-button Report-btn'>Export</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Reports