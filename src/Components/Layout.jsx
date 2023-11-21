import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
