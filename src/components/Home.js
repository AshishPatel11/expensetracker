import React, { useState } from 'react';
import Nav from './Nav';
import Head from './Head';
import { PlusCircle, X } from 'lucide-react'
import LoginAuth from './LoginAuth';
import Card from './Card';
import NewExpense from './Expenses/NewExpense';

function Home() {
    const [Expenseform, setExpenseform] = useState(false);
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
                        <Card heading="Total monthly budget" amount="$ 4,00,000" />
                        <Card heading="Total Expense Value" amount="$ 4,00,000" />
                        <Card heading="Today's Expense Value" amount="$ 4,00,000" />

                        <div className='card-container'>
                            <div className='card-data btn-container'>
                                <button onClick={() => { setExpenseform(true) }} className='card-btn'>Add Expense <PlusCircle color="#f0f0f0" /></button>
                                <button className='card-btn'>Add Receipt <PlusCircle color="#f0f0f0" /></button>
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
                </div>
            </div >
        </>
    )
}

export default Home