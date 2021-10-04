import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import cartImg from '../../../images/cart.png';
import logo from '../../../images/Screenshot_2.png';

const Footer = () => {
    const element = <FontAwesomeIcon icon={faAddressBook} />
    return (
        <div className="footer row container-fluid p-4">
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
    );
};

export default Footer;