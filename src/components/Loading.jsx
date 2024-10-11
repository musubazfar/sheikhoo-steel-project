import React from 'react';
import '../styles/loading.css'
import logo from '../assets/logo.png'


const LoadingPage = () => {
    return (
        <div className="loading-page">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="flipping-logo" />
            </div>
        </div>
    );
};

export default LoadingPage;