import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navlink = () => {
    const [opens, setOpens]=useState(false);
    const route=[
        {
            id:1,
            name:'Home',
            path:'/home'
        },
        {
            id:2,
            name:'About',
            path:'/about'
        },
        {
            id:3,
            name:'Details',
            path:'/details'
        },
        {
            id:4,
            name:'Information',
            path:'/information'
        },
        {
            id:5,
            name:'Others',
            path:'/others'
        }
       
    ]
    return (
        <div>
            {/* <a className='text-blue-600 text-xl pe-8' href="http://">Home</a>
            <a className='text-blue-600 text-xl pe-8'  href="http://">About</a>
            <a className='text-blue-600 text-xl pe-8'  href="http://">Contract</a>
            <a className='text-blue-600 text-xl pe-8'  href="http://">Information</a> */}

            <div onClick={()=>setOpens(!opens)} className='md:hidden'>
                <span>
                    {opens === true ? 
                <XMarkIcon className="h-6 w-6 text-purple-500" /> : 
                <Bars3Icon className="h-6 w-6 text-purple-500" />}</span>
            
            
            </div>
            <ul className={`md:flex md:static pl-8 absolute duration-500 bg-purple-400 ml-3 ${opens ? 'top-6': '-top-72'}`}>
            
            {
               route.map(names=><Link key={names.id} name={names}></Link>) 
            }
            </ul>
        </div>
    );
};

export default Navlink;