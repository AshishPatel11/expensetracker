import React from 'react';
import { Chart as PieChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function PieChart() {
    PieChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
    PieChartJS.defaults.set('plugins.datalabels', {
        color: '#f0f0f0',
        anchor: 'end',
        align: 'start'
    });

    const options = {
        plugins: {
            legend: {
                position: 'top',
                Alignment: 'start'
            },
            title: {
                display: true,
                text: 'Expense by Categories',
                color: "#006770",
                position: "top",
                font: {
                    family: 'mooli',
                    size: 18
                }
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                font: {
                    weight: 'bold',
                    size: '18',
                    family: 'mooli'
                }
            }
        },
    };
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div className='Pie-chart'>
                <Doughnut options={options} data={data} />
            </div>
        </>
    )

}
