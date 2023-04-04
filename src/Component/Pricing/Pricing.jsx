import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ShowDisplay from './ShowDisplay/ShowDisplay';

const Pricing = () => {
    const [prices, setPrices]=useState([])
    useEffect(()=>{
        fetch('Prices.json')
        .then(res =>res.json())
        .then(data=>setPrices(data))
    },[])
    return (
        <div className='mx-12'>
            <h1 className='text-center text-purple-950 bg-purple-300 text-5xl mt-6 py-6 text-bolder font-bold'>Awesome Affordable Prices</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    prices.map(price =><ShowDisplay key={price.id} price={price}></ShowDisplay>)
                }
            </div>
        </div>
    );
};

export default Pricing;