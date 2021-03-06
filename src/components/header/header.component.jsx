import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/Home">
        Home
      </Link>
      <Link className="option" to="/About">
        About
      </Link>
      <Link className="option" to="/">
        Card
      </Link>
    </div>
  </div>
);

export default Header;
