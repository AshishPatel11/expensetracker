import react, { useEffect, useState } from 'react'

const ExpenseTable = () => {
    const [ExpenseData, setExpenseData] = useState("")
    const [tableHead, setTableHead] = useState([])

    useEffect(() => {

    }, [ExpenseData])

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
                setExpenseData(null);
            }
            else {
                setExpenseData(apiObj);
            }
        }
        fetchAPI()
    }, [])

    return (
        <>

        </>
    )
}

export default ExpenseTable
