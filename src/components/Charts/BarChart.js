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
    console.log(LabelData, Dataset)

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
                body: JSON.stringify(JSON.parse(localStorage.getItem("user")))
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
        maintainAspectRatio: true,
        // aspectRatio: 1 | 2,
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
