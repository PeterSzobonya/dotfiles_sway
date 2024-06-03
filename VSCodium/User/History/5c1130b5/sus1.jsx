import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/reducers/userReducer';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectCurrentUser);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;