import { useEffect, useState } from 'react'
import '../CSS/ExpenseTable.css'
const ReminderTable = (props) => {
    const [ExpenseData, setExpenseData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch("http://localhost:5000/api/RemHistory", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(JSON.parse(localStorage.getItem("user")))
            });
            const apiObj = await response.json()
            if (apiObj.error) {
                setExpenseData([]);
            }
            else {
                setExpenseData(apiObj);
            }
        }
        fetchAPI()
    }, [])

    return (
        <>
            <h3 className='history-tagname'>Remiders</h3>
            <div className='Table-container'>
                <table className='Expense-tbl'>
                    <thead className='tbl-head'>
                        <tr className='tbl-row'>
                            <th className='tbl-hcolumn'>Expense Name</th>
                            <th className='tbl-hcolumn'>Expense Amount</th>
                            <th className='tbl-hcolumn'>Category</th>
                            <th className='tbl-hcolumn'>Reminder Date</th>
                            <th className='tbl-hcolumn'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='tbl-body'>
                        {ExpenseData.map((expense) => (
                            <tr className='tbl-row' key={expense._id}>
                                <td className='tbl-data'>{expense.ExpenseName}</td>
                                <td className='tbl-data'>₹{expense.ExpenseAmount}</td>
                                <td className='tbl-data'>{expense.Category}</td>
                                <td className='tbl-data'>{new Date(expense.ReminderDate).toLocaleDateString()}</td>
                                <td className='tbl-data'>{expense.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReminderTable
