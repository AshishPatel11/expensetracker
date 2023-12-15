import { useEffect, useState } from 'react'
import '../CSS/ExpenseTable.css'
import NewExpense from '../Expenses/NewExpense'
import { X } from 'lucide-react'
import UpdateReminder from '../Expenses/UpdateReminder'


const ReminderTable = (props) => {
    const [ExpenseData, setExpenseData] = useState([])
    const [ReminderForm, setReminderForm] = useState(false);
    const [Buffer, setBuffer] = useState({})
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
    if (props.Reminderlist) {
        props.Reminderlist(ExpenseData)
    }

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
                            <th className='tbl-hcolumn'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='tbl-body'>
                        {ExpenseData.map((expense) => (
                            <tr className='tbl-row' key={expense._id}>
                                <td className='tbl-data'>{expense.ExpenseName}</td>
                                <td className='tbl-data'>₹{expense.ExpenseAmount}</td>
                                <td className='tbl-data'>{expense.Category}</td>
                                <td className='tbl-data'>{new Date(expense.ReminderDate).toLocaleDateString("en-IN")}</td>
                                <td className='tbl-data'>{expense.status}</td>
                                <td className='tbl-data'><button onClick={() => { setReminderForm(true); setBuffer(expense) }} className='search-button update-btn'>Update</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {ReminderForm &&
                < div className='reminder-form-container'>
                    <div className='form-head'>
                        <p className='form-title'>Set Reminder</p>
                        <X onClick={() => { setReminderForm(false) }} color="#666666" strokeWidth={3} />
                    </div>
                    <UpdateReminder updateDetails={Buffer} />
                </div>
            }
        </>
    )
}

export default ReminderTable
