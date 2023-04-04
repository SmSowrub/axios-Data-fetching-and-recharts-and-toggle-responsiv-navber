import React from 'react';

const Link = ({name}) => {
    return (
        <li className='mr-20 mb-2 md:mb-0 hover:bg-purple-700 rounded p-1'>
            <a href={name.path}>{name.name}</a>
        </li>
    );
};

export default Link;