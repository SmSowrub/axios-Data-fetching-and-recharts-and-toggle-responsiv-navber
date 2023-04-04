import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones]=useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const loadData =data.data.data;
            console.log(loadData);
            const phoneData =loadData.map(phone =>{
                const parts =phone.slug.split('-')
                const prices =parseInt(parts[1]);
                const phoneInfo ={
                    name:phone.phone_name,
                    price:prices
                }
                return phoneInfo
            })
           console.log(phoneData);
           setPhones(phoneData)
        })
    },[])
    return (
        <div>
        
            <BarChart width={1000} height={400} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis ></YAxis>
            <Tooltip></Tooltip>
            </BarChart>
            
        </div>
    );
};

export default PhoneBar;