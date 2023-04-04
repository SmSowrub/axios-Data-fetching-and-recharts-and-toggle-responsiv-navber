import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({featureData}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-4 w-4 mr-1 text-white" />
            <p>{featureData}</p>
        </div>
    );
};

export default Feature;