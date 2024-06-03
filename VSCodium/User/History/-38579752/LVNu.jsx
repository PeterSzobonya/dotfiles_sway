import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/react.svg';

const NavigationBar = () => {
    return (
        <nav style={{ backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center', padding: '10px' }}>
            {/* Icon */}
            <div style={{ marginRight: '20px' }}>
                <img src={iconSvg} alt="Icon" style={{ width: '30px', height: '30px' }} />
            </div>

            {/* Navigation options */}
            <div>
                <Link to="/login" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Login</Link>
                <Link to="/register" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Register</Link>
                <Link to="/job-listings" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Job Listings</Link>
                <Link to="/profile" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Profile</Link>
                <Link to="/create-job-listing" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Create Job Listing</Link>
                <Link to="/logout" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Logout</Link>
            </div>
        </nav>
    );
};

export default NavigationBar;
