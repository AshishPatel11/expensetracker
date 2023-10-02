import React, { useEffect, useState } from 'react';
import { Chart as PieChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function PieChart() {
    const [ChartData, setChartData] = useState([])
    const [LabelData, setLabelData] = useState([])
    const [Dataset, setDataSet] = useState([])

    useEffect(() => {
        if (ChartData) {

            const label = ChartData.map((item, index) => {
                return item.Category
            })
            const data = ChartData.map((item, index) => {
                return item.percentage.toFixed(2);
            })
            setDataSet(data)
            setLabelData(label)
        }
    }, [ChartData])

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch("http://localhost:5000/api/PieChart", {
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
                    weight: 'normal',
                    size: '14',
                    family: 'mooli'
                },
                formatter: function (value, ctx) {
                    return (value) + '%';
                },
            }
        },
    };
    const data = {
        labels: LabelData,
        datasets: [
            {
                label: '%',
                data: Dataset,
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
