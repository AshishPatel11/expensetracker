import React, { useState } from 'react';
import Nav from './Nav';
import Head from './Head';
import './CSS/ExpenseHistory.css'
import LoginAuth from './LoginAuth';
import ExpenseTable from './Expenses/ExpenseTable';

function ExpenseHistory() {
  const [ExpenseData, setExpenseData] = useState();
  const [UserData, setUserData] = useState({})


  //Genrating the Option tag for the category of option with map
  const Category = ["Entertaintment", "Groceries", "Education", "Personal Care", "Health", "Fitness", "Kids", "Food & Dining", "Bills & Utilities", "Auto & Transport", "Taxes", "Investment", "Trips", "Petcare", "Clothing", "Beauty", "HouseHold", "Air tickets", "Vehicle", "Hotel", "Petrol & Gas", "Loans & EMI", "Rents", "Miscellaneous"];

  const CategoryList = Category.map((item, index) => {
    return <option key={index} value={item}> {item} </option>
  })

  const onChange = event => {
    setExpenseData({ ...ExpenseData, [event.target.name]: event.target.value })
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
            <Head message="Expense" />
            <div className='filter-container'>
              <input className='search-box' type="text" placeholder="Search..." />
              <button className='search-button'>Search</button>
              <select className='select' onChange={onChange} ><option hidden>Search by filter</option>{CategoryList}</select>
            </div>
            <div>
              <h3 className='history-tagname history-container'> Expense History</h3>
              <ExpenseTable />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ExpenseHistory