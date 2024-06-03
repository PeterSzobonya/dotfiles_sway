import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/react.svg';

const NavigationBar = () => {
    let user = useSelector(selectCurrentUser);

    return (
        <nav style={{ backgroundColor: 'black', color: 'white', display: 'flex', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999, alignItems: 'center', padding: '10px' }}>
            {/* Icon */}
            <Link to="/" style={{ marginRight: '20px' }}>
                <img src={icon} alt="Icon" style={{ width: '30px', height: '30px' }} />
            </Link>

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
