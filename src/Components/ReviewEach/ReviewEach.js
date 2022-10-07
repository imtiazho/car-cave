import React from 'react';
import './ReviewEach.css';

const ReviewEach = ({ eachReview }) => {
    const {name, review, stars} = eachReview;
    return (
        <div className='reviewCard'>
            <h4>{name}</h4>            
            <p>{review}</p>
            <div className="rating">
                <p><small>Rating: {stars.length} stars</small></p>
            </div>
        </div>
    );
};

export default ReviewEach;