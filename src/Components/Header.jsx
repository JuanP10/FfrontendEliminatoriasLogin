import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Sidebar from './Sidebar';
import LoginIcon from '@mui/icons-material/Login';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const isAuthenticated = true;
    const targetPath = isAuthenticated ? '/' : '/login';

    navigate(targetPath);
  };

  return (
    <div className="app-header">
      <Link to="/login" onClick={handleLogoClick}>
      <LoginIcon className="header-logoLogin" />
      </Link>
      <Sidebar />
      <div className="header-title">
        EliminatoriasAPI
        <img
          src="https://cdn.unimagdalena.edu.co/images/escudo/bg_light/128.png"
          alt="Logo"
          className="header-logo"
        />
      </div>
    </div>
  );
}


export default Header;
