import React from "react"
import DesktopLogo from "../assets/images/logo.png"
import LogoMobile from "../assets/images/logo_mobile.png"

function Header() {
  return (
    <header className="header">
      <img className="headerDesktop" src={DesktopLogo} alt="" />
      <img className="headerMobile" src={LogoMobile} alt="" />
    </header>
  )
}

export default Header
