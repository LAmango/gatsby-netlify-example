import React from "react";
import("../../static/scss/Header.scss");

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Community Health</h1>
      <div className="buffer"></div>
      <ul className="navBar">
        <li className="nav">
          <a>HOME</a>
        </li>
        <li className="nav">ABOUT US</li>
        <li className="nav">OUR SERVICES</li>
        <li className="nav">CHP NEWS</li>
        <li className="nav">CONTACT US</li>
      </ul>
    </div>
  );
};

export default Header;
