import React from 'react';
import LogoMobile from '../assets/images/LogoMobile.png';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={LogoMobile} alt="logo" />
    </header>
  );
}

export default Header;
