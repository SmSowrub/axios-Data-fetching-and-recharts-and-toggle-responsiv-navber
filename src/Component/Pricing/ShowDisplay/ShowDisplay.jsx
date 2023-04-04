import React from 'react';
import Feature from '../../Feature/Feature';


const ShowDisplay = ({price}) => {
    return (
        <div >
            <div className='bg-indigo-400 p-4 rounded mt-3'>
            <h1 className='text-center'>
                <span className='font-extrabold text-cyan-50 text-3xl text-purple-700'>{price.price}</span>
                <span className='text-red-800 font-bold'>/month</span>
            </h1>
            <h4 className='font-extrabold text-center'>{price.Author_name}</h4>
            <h5 className='font-bold text-white'>features : </h5>
            {
                price.features.map((featureData, idx) => <Feature key={idx} featureData={featureData}></Feature>)
            }
            </div>
            <button className='w-full p-1 rounded-md bg-purple-700 text-center font-bold text-white'>Add now</button>
        </div>
    );
};

export default ShowDisplay;