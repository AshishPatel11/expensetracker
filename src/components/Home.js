import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Head from './Head';
import { BellPlus, PlusCircle, X } from 'lucide-react'
import LoginAuth from './LoginAuth';
import Card from './Card';
import NewExpense from './Expenses/NewExpense';
import NewReminder from './Expenses/NewReminder';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import ExpenseTable from './Expenses/ExpenseTable'
import ReminderTable from './Reminders/ReminderTable'

function Home() {
    const [Expenseform, setExpenseform] = useState(false);
    const [ReminderForm, setReminderForm] = useState(false);
    const [budgetData, setBudgetData] = useState({});
    console.log(budgetData)
    const user = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        const getBudgetData = async () => {
            let response = await fetch("http://localhost:5000/api/getBudget", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uid: user.uid })
            })
            setBudgetData(await response.json())
        }
        getBudgetData();
    }, [])
    return (
        <>
            <LoginAuth />
            <div className='body-container'>
                <div className="NavBar">
                    <Nav />
                </div>
                <div className='dash-container'>
                    <div>
                        <Head />
                    </div>

                    <div className='Dash-cards'>
                        <Card option="more-menu" heading="Total monthly budget" amount={budgetData.BudgetAmt ? "₹ " + budgetData.BudgetAmt : "amount not set"} />
                        <Card heading="Total Expense Value" amount="$ 4,00,000" />
                        <Card heading="Today's Expense Value" amount="$ 4,00,000" />

                        <div className='card-container'>
                            <div className='card-data btn-container'>
                                <button onClick={() => { setExpenseform(true); setReminderForm(false) }} className='card-btn'>Add Expense <PlusCircle color="#f0f0f0" /></button>
                                <button onClick={() => { setReminderForm(true); setExpenseform(false) }} className='card-btn'>Set Reminder <BellPlus color="#f0f0f0" /></button>
                            </div>
                        </div>

                    </div>
                    {Expenseform &&
                        < div className='Exp-form-container'>
                            <div className='form-head'>
                                <p className='form-title'>New Expense</p>
                                <X onClick={() => { setExpenseform(false) }} color="#666666" strokeWidth={3} />
                            </div>
                            <NewExpense />
                        </div>
                    }
                    {ReminderForm &&
                        < div className='reminder-form-container'>
                            <div className='form-head'>
                                <p className='form-title'>Set Reminder</p>
                                <X onClick={() => { setReminderForm(false) }} color="#666666" strokeWidth={3} />
                            </div>
                            <NewReminder />
                        </div>
                    }
                    <div className="chart-container">
                        <BarChart />
                        <PieChart />
                    </div>
                    <div>
                        <div className='recent-container'>
                            <ReminderTable head="Recent Expenses" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home