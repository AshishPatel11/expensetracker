import React, { useState } from 'react';
import Nav from './Nav';
import Head from './Head';
import './CSS/ExpenseHistory.css'
import LoginAuth from './LoginAuth';
import ExpenseTable from './Expenses/ExpenseTable';

function ExpenseHistory() {
  const [ExpenseData, setExpenseData] = useState({});
  const [SearchData, setSearchData] = useState();
  const [UserData, setUserData] = useState({})


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
              <form onSubmit={handleSubmit}>
                <input onChange={onChange} name='search' className='search-box' type="text" placeholder="Search..." />
                <button type='submit' className='search-button'>Search</button>
              </form>
              <select className='select' name='ExpenseCategory' onChange={onChange} ><option hidden>Search by filter</option>{CategoryList}</select>
            </div>
            <div className='history-container'>
              <ExpenseTable search={SearchData} category={ExpenseData} />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ExpenseHistory