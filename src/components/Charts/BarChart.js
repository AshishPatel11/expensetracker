import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import '../CSS/Chart.css'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function BarChart() {
    const [ChartData, setChartData] = useState([])
    const [LabelData, setLabelData] = useState([])
    const [Dataset, setDataSet] = useState([])


    useEffect(() => {
        if (ChartData) {

            const label = ChartData.map((item, index) => {
                return item._id
            })
            const data = ChartData.map((item, index) => {
                return item.totalExpense
            })
            setDataSet(data)
            setLabelData(label)
        }
    }, [ChartData])

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch("http://localhost:5000/api/BarChart", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            });
            let apiObj = await response.json();
            if (apiObj.error) {
                setChartData(null)
            }
            else if (apiObj[0]) {
                setChartData(apiObj)
            }
        }
        fetchAPI();
    }, [])

    const options = {
        responsive: true,
        maintainAspectRatio: 'true',
        // aspectRatio: 1 | 3,
        plugins: {
            legend: {
                position: 'top',
                Alignment: 'start'
            },
            title: {
                display: true,
                text: 'Expense Report',
                color: "#006770",
                position: "top",
                align: 'start',
                font: {
                    family: 'mooli',
                    size: 18
                }
            },
        },
    };

    const labels = LabelData
    const data = {
        labels,
        datasets: [
            {
                label: 'Expense',
                data: Dataset,
                backgroundColor: '#006770a1',
                borderRadius: "4",
            },
            {
                label: 'Budget',
                data: Dataset,
                backgroundColor: '#00adbca1',
                borderRadius: "4",
            },
        ],
    };
    console.log(ChartData)
    if (!ChartData) {
        return (
            <>
                <div className='Bar-chart'>
                    <h1>No Data Available</h1>
                </div>
            </>
        )
    }
    return (

        <>
            <div className='Bar-chart'>
                <Bar options={options} data={data} />
            </div>
        </>
    )
}




// db.expenses.aggregate([
//     {
//         $match: {
//             // Add any specific filters here if needed
//         }
//     },
//     {
//         $project: {
//             yearMonth: { $dateToString: { format: "%Y-%m", date: "$ExpenseDate" } },
//             ExpenseAmount: 1
//         }
//     },
//     {
//         $group: {
//             _id: "$yearMonth",
//             totalExpense: { $sum: "$ExpenseAmount" }
//         }
//     },
//     {
//         $sort: { _id: 1 } // Sort by year and month
//     }
// ])
