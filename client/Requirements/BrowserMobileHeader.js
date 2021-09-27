import React from "react";
import { Link } from "react-router-dom";

import "../Resources/style.css";

import Logo from "../Resources/Cycle_plain.png";
const BrowserHeaderMobile = () => {
  return (
    <div >
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={Logo}  alt="Logo" style={{width:"1px !important"}} />
        </Link>


      </nav>
    </div>
  );
};
export default BrowserHeaderMobile;
