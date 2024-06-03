import React from 'react';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
