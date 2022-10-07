import React from 'react';
import useReview from '../../Hook/useReview';
import ReviewEach from '../ReviewEach/ReviewEach';
import './Review.css'

const Review = () => {
    const [review, setReview] = useReview()
    return (
        <div className="all-reviews">
            <h2>All Reviews</h2>
            <div className='review-container'>
                {
                    review.map(eachReview => <ReviewEach
                        eachReview={eachReview}
                        key={eachReview.id}
                    ></ReviewEach>)
                }
            </div>
        </div>
    );
};

export default Review;