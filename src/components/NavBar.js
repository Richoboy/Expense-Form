import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="header">
      <nav>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <button className="mobile-menu-icon" onClick={toggle}>
          {!isMobile ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;