import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <a href="/">
          <img
            className="header-logo"
            src="https://res.cloudinary.com/octavian2111/image/upload/v1620747079/Screenshot_2021-05-11_at_17.30.24_qbiscg.png"
            height="50px"
            width="auto"
          ></img>
        </a>
        <Link to="/shop">
        <p className="header-text">Rock Shop</p>
        </Link>
        <Link to="/photoblog">
        <p className="header-text">Photo Journal</p>
        </Link>
      </div>
    </div>
  );
}
