import React from 'react';
import DesktopLogo from '../assets/images/logo.png';
import MobileLogo from '../assets/images/logo_mobile.png';

function Header() {
  return (
    <header className="header">
      <img className="logo-desktop" src={DesktopLogo} alt="logo" />
      <img className="logo-mobile" src={MobileLogo} alt="logo" />
    </header>
  );
}

export default Header;
