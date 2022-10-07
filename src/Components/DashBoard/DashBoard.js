import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis, CartesianGrid, Legend, Bar, BarChart } from 'recharts';
import './DashBoard.css'

const DashBoard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('dashboard.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="chart-container">
            <div className="line-chart">
                <LineChart width={500} height={300} data={data}>
                    <XAxis dataKey={"month"}></XAxis>
                    <Line stroke='#FF9900' dataKey={'investment'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <Line stroke='#000000' dataKey={'sells'}></Line>
                    <Tooltip />
                    <Legend />
                    <YAxis></YAxis>
                </LineChart>
            </div>

            <div className="pie-chart">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis  dataKey={"month"} />
                    <YAxis dataKey="investment"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#FF9900" />
                    <Bar dataKey="sells" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default DashBoard;