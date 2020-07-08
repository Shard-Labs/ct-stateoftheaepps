import React from 'react';
import LogoMobile from '../../assets/images/LogoMobile.png';

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={LogoMobile} alt="logo" />
      </a>
    </header>
  );
}

export default Header;
