import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const DashBoard = () => {
   const marksChart=
    [
        {
          "_id": "642c4e2a8ac36f283160f71b",
          "name": "Moore Hancock",
          "Math": 88,
          "Bangla": 75,
          "Islam": 55
        },
        {
          "_id": "642c4e2a176ea2c58e6d1dd7",
          "name": "Bridgette Berger",
          "Math": 88,
          "Bangla": 75,
          "Islam": 55
        },
        {
          "_id": "642c4e2adddf3cb40d9d2b0b",
          "name": "Susanna Carpenter",
          "Math": 88,
          "Bangla": 95,
          "Islam": 35
        },
        {
          "_id": "642c4e2ac944d14f1f92d646",
          "name": "Hall Fleming",
          "Math": 78,
          "Bangla": 75,
          "Islam": 55
        },
        {
          "_id": "642c4e2ac68cff4d7b545cba",
          "name": "Johns Clayton",
          "Math": 59,
          "Bangla": 85,
          "Islam": 45
        },
        {
          "_id": "642c4e2a5c9181fa846f8636",
          "name": "Matilda Morris",
          "Math": 88,
          "Bangla": 95,
          "Islam": 75
        }
      ]
   
    return (
        <div className='mt-8'>
            <LineChart
             width={1000}
             height={400}
             data ={marksChart}
            >
               <Line stroke="#82ca9d" dataKey="Math"></Line>
               <Line stroke="#8884d8" dataKey="Bangla"></Line>
               <Line stroke="#82ca9d" dataKey="Islam"></Line>
               <XAxis dataKey="name" />
               <YAxis />
            </LineChart>
        </div>
    );
};

export default DashBoard;