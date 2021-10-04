import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="error-page container text-center">
            <h1 className="text-danger">404</h1>
            <h2>Page not Found</h2>
            <h6 className="w-50 m-auto mb-5 mt-5">we are sorry The page you requested is not found. Plase go back to the Home page or contact us via @gmail.com</h6>
            <Link to="/home"><button className="btn btn-success mb-5 rounded mx-2">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;