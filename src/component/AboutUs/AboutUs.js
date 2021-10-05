import React from 'react';
import backgroundImg from '../../images/about.jpg'
import backgroundImg2 from '../../images/about2.jpg'

import "./AboutUs.css"
const AboutUs = () => {
    return (
        <div>
            <div className='row w-75 mx-auto'>
                <h1 className='text-center text-success pb-4'>About Us</h1>
                <div className="col-md-6 pt-4">
                    <p className='fw-bold'>We are trying to developed new education system for everyone and we provide scholarship our married poor students</p>
                    <p className='fw-bold'>We are committed to provide high quality contents</p>

                </div>
                <div className="col-md-6 pb-4">
                    <img className='img-fluid' src={backgroundImg} alt="" />

                </div>

            </div>
            <div className='row w-75 mx-auto'>
                <h1 className='text-center text-success pb-4'>Why Choose Us</h1>
                <div className="col-md-6 pb-4">
                    <img className='img-fluid' src={backgroundImg2} alt="" />

                </div>
                <div className="col-md-6 pt-4">
                    <ul className='fw-bold'>
                        <li>High Quality Video</li>
                        <li>World Best Mentor</li>
                        <li>Professional project</li>
                        <li>Internship facelities</li>
                    </ul>

                </div>


            </div>
        </div>
    );
};

export default AboutUs;