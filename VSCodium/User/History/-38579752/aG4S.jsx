import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../assets/react.svg';
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, logout } from '../../redux/reducers/auth/userReducer';

const NavigationBar = () => {
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <nav style={{ backgroundColor: 'black', color: 'white', display: 'flex', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999, alignItems: 'center', padding: '10px' }}>
            {/* Icon */}
            <Link to="/" style={{ marginRight: '20px' }}>
                <img src={icon} alt="Icon" style={{ width: '30px', height: '30px' }} />
            </Link>

            {/* Navigation options */}
            <div>
                {!user && <Link to="/login" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Bejelentkezés</Link>}
                {!user && <Link to="/register" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Regisztráció</Link>}
                {user && <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Álláshirdetések</Link>}
                {user && <Link to="/profile" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Profilom</Link>}
                {user && user.role === "company" && <Link to="/create-job-listing" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Álláshirdetés hozzáadása</Link>}
                {user && <span onClick={handleLogout} style={{ margin: '0 10px', color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Kijelentkezés</span>}
            </div>
        </nav>
    );
};

export default NavigationBar;
