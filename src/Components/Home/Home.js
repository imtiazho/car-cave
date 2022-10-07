import React from 'react';
import Banner from '../../Asset/Home.png'
import './Home.css'
import { Link } from "react-router-dom";
import useReview from '../../Hook/useReview';
import ReviewEach from '../ReviewEach/ReviewEach';

const Home = () => {
    const [review, setReview] = useReview()

    return (
        <div className='home-container'>
            <div className='home-page'>
                <div className="left-side-top-home">
                    <h1>LIFE'S TO SHORT TO DRIVE <br /> <span>BORING</span> CARS</h1>
                    <p>Automobiles have always been part of my life, and I’m sure they always will be. What is it about them that moves me? The sound of a great engine, the unity and uniqueness of an automobile’s engineering and coachwork, the history of the company and the car, and, of course, the sheer beauty of the thing.</p>
                    <Link to='/about' className='learnmore-btn'>Learn More</Link>
                </div>

                <div className="right-side-top-home">
                    <img src={Banner} alt="" />
                </div>
            </div>

            <div className="home-review">
                <h2>Customer Review</h2>
                <div className="review-area">
                    {
                        review.slice(0, 6).map(eachReview => <ReviewEach
                            eachReview={eachReview}
                            key={eachReview.id}
                        ></ReviewEach>)
                    }
                </div>
                <Link className='see-review' to='/review'>See all Review</Link>
            </div>
        </div>
    );
};

export default Home;