import { useEffect, useState } from 'react'
import '../CSS/ExpenseTable.css'
const ExpenseTable = (props) => {
    const [ExpenseData, setExpenseData] = useState([])
    const [Unfiltered, setUnfiltered] = useState([])

    //fetching the all expense data
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch("http://localhost:5000/api/ExpHistory", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(JSON.parse(localStorage.getItem("user")))
            });
            const apiObj = await response.json()
            if (apiObj.error) {
                setUnfiltered([]);
            }
            else {
                setUnfiltered(apiObj);
                setExpenseData(apiObj)
            }
        }
        fetchAPI()
    }, [])
    useEffect(() => {
        const SetFileter = async () => {
            if (props.category.ExpenseCategory) {
                let filteredData = await Unfiltered.filter((expense) => expense.Category === props.category.ExpenseCategory)
                setExpenseData(filteredData)
                console.log("first if")
            }
            else if (props.search) {
                console.log(props.search)
                let filteredData = await Unfiltered.filter((expense) => expense.ExpenseName.toUpperCase() === props.search.toUpperCase())
                setExpenseData(filteredData)
            }
            else {
                console.log("else")
                setExpenseData(Unfiltered)
            }
        }
        SetFileter()
    }, [props.category, props.search])


    return (
        <>
            <h3 className='history-tagname'>{props.head ? props.head : "Expense History"} </h3>
            <div className='Table-container'>
                <table className='Expense-tbl'>
                    <thead className='tbl-head'>
                        <tr className='tbl-row'>
                            <th className='tbl-hcolumn'>Expense Name</th>
                            <th className='tbl-hcolumn'>Expense Amount</th>
                            <th className='tbl-hcolumn'>Category</th>
                            <th className='tbl-hcolumn'>Expense Date</th>
                            <th className='tbl-hcolumn'>Description</th>
                        </tr>
                    </thead>
                    <tbody className='tbl-body'>
                        {ExpenseData.map((expense) => (
                            <tr className='tbl-row' key={expense._id}>
                                <td className='tbl-data'>{expense.ExpenseName}</td>
                                <td className='tbl-data'>₹{expense.ExpenseAmount}</td>
                                <td className='tbl-data'>{expense.Category}</td>
                                <td className='tbl-data'>{new Date(expense.ExpenseDate).toLocaleDateString("en-IN")}</td>
                                <td className='tbl-data'>{expense.ExpenseDescription}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ExpenseTable
