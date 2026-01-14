import { GiHamburgerMenu } from "react-icons/gi";
import { useRef,useEffect, useState } from "react";

import "./Header.css";

const Header = ({ onMenuOpen }) => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="topbar">
        {/* Left Branding */}
        <div className="topbar-left">
          <img
            src="/assets/icons/film_logo.webp"
            alt="College Logo"
            className="film-logo"
          />

          <div className="topbar-content">
            {/* <span className="subtitle">MIT - ADT University , Pune</span> */}
            <h1 className="main-title">School Of Film & Television</h1>
          </div>
        </div>

        {/* Hamburger */}
        <button className="menu-btn" onClick={onMenuOpen}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
