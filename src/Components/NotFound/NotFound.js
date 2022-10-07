import React from 'react';
import NotFoundPic from '../../Asset/notFound.svg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <img src={NotFoundPic} alt="" />
        </div>
    );
};

export default NotFound;