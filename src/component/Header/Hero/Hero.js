import React, { useEffect, useState } from 'react';
import backgroundImg from '../../../images/hero.jpg';
import home2 from '../../../images/home2.png';
import home3 from '../../../images/home3.png';
import HomeItems from '../HomeItems/HomeItems';
import "./Hero.css";

const Hero = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/data2.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <div className="text-center text-light" style={{ backgroundImage: `url(${backgroundImg})`, height: "600px", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="my-hero">
                    <h1 style={{ fontSize: '50px', color: '#fbc531' }}>Welcome to our Elearn platform</h1>
                    <p>We are provide lot of free training here</p>
                    <button className='btn btn-warning text-light'>Courses</button>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff' }} className='row p-4'>
                <h4 className='text-dark xl text-center p-4'>One app for all devices Mobile, Tablet, Desktop & TV</h4>
                <div className="col-md-4">
                    <p>Mobile first design</p>
                    <small>The version 4 is built with mobile centeric design pattern and the latest Progressive web app technology.</small>
                    <small className='fst-italic fw-bold'>Course pursue screen for students</small>
                    <small className='fst-italic fw-bold'>Course creation module for Instructors</small>

                </div>
                <div className="col-md-4">
                    <img className='img-fluid' style={{ width: '200px', height: '300px' }} src={home2} alt="" />
                </div>
                <div className="col-md-4">
                    <img className='img-fluid' style={{ width: '200px', height: '300px' }} src={home3} alt="" />
                </div>

            </div>
            <div className='row w-75 mx-auto pt-4'>
                <h1 className='text-warning text-center'>Our Best Courses</h1>
                {
                    items.map(item => <HomeItems
                        key={item.id}
                        item={item}
                    ></HomeItems>)
                }

            </div>
        </div>
    );
};

export default Hero;