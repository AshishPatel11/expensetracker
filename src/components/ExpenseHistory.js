import React, { useState } from 'react';
import Nav from './Nav';
import Head from './Head';
import './CSS/ExpenseHistory.css'
import LoginAuth from './LoginAuth';

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
            <Head message="Expense" />
          </div>
          <h3 className='history-tagname history-container'> Expense History</h3>
        </div>
      </div >
    </>
  )
}

export default ExpenseHistory