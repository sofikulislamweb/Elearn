import React from 'react';
import './Footer.css';
import cartImg from '../../images/cart.png';
import logo from '../../images/Screenshot_2.png';

const Footer = () => {
    return (
        <section>
            <div className="footer row mx-auto p-4 align-items-center justify-content-center">
                <div className="col-md-4">
                    <p className='text-warning'>About  company</p>
                    <ul>
                        <li>Register</li>
                        <li>Activate</li>
                        <li>Groups Directory</li>
                        <li>Members Directory</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <p className='text-warning'>Our Top Courses</p>
                    <ul>
                        <li>Design Dynamics</li>
                        <li>Internet of Things Security</li>
                        <li>Deep Virtual Reality</li>
                        <li>Artificial Intelligence</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <img src={logo} alt="" />
                </div>
                <div className='text-center'>
                    <p className='text-warning'>Pay us via</p>
                    <img className='img-fluid w-25' src={cartImg} alt="" />
                </div>

            </div>
        </section>
    );
};

export default Footer;