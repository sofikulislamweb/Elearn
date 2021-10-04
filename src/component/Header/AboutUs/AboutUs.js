import React from 'react';
import backgroundImg from '../../../images/about.jpg'
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <div className="conatiner col-12 text-center text-light" style={{ backgroundImage: `url(${backgroundImg})`, height: "600px", backgroundRepeat: 'no-repeat' }}>
            <div className="my-hero">
                <h1 style={{ fontSize: '50px', color: '#fbc531' }}>Welcome to our Elearn platform</h1>
                <p>We are provide lot of free training here</p>
                <button className='btn btn-warning text-light'>Courses</button>
            </div>
        </div>
    );
};

export default AboutUs;