import React from 'react';
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
                position: "top"
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 30, 50, 60, 70, 80, 20, 60, 50, 60, 80],
                backgroundColor: '#006770a1',
                borderRadius: "4",
            },
            {
                label: 'Dataset 2',
                data: [50, 20, 30, 50, 60, 70, 80, 50, 60, 70, 90, 10],
                backgroundColor: '#00adbca1',
                borderRadius: "4",
            },
        ],
    };


    return (

        <>
            <div className='Bar-chart'>
                <Bar options={options} data={data} />
            </div>
        </>
    )
}
