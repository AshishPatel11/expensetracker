import React, { useState } from 'react';
import Nav from './Nav';
import Head from './Head';
import { BellPlus, PlusCircle, X } from 'lucide-react'
import LoginAuth from './LoginAuth';
import Card from './Card';
import NewExpense from './Expenses/NewExpense';
import NewReminder from './Expenses/NewReminder';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';

function ExpenseHistory() {


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
        </div>
      </div >
    </>
  )
}

export default ExpenseHistory