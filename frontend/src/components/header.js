import React from 'react';
import DesktopLogo from '../assets/images/logo.png';
import MobileLogo from '../assets/images/logo_mobile.png';

function Header() {
  return (
    <header class="header">
      <img class="logo-desktop" src={DesktopLogo} alt="logo" />
      <img class="logo-mobile" src={MobileLogo} alt="logo" />
    </header>
  );
}

export default Header;
