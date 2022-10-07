import React, { useEffect, useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('questionAnswer.json')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    return (
        <div className='questions-area'>
            {
                questions.map(question =>
                    <div className="question">
                        <h2>{question.question}</h2>
                        <p>{question.answer}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Blogs;

{/* <div className="question">
                        <h2>{question.question}</h2>
                        <p>{question.answer}</p>
                    </div> */}