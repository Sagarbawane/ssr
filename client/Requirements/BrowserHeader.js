import React from "react";
import { Link } from "react-router-dom";

import "../Resources/style.css";

import Logo from "../Resources/Cycle_plain.png";
const BrowserHeaderWithoutLogin = () => {
  return (
    <div style={{}}>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={Logo}  alt="Logo" width="120" />
        </Link>


      </nav>
    </div>
  );
};
export default BrowserHeaderWithoutLogin;
