import React from 'react';
import NavigationBar from './navigation/NavigationBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
