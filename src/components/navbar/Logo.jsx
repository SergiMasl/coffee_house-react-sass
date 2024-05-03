import React from "react";
import Img from "../../styles/img/logo.png";
import { Link } from "react-router-dom";

function Logo({ setIsLog }) {
  return (
    <div className="logo-wrap">
      <Link to="" className="logo-link" onClick={() => setIsLog(false)}>
        <img src={Img} alt="Logo" className="logo-img" />
      </Link>
    </div>
  );
}

export default Logo;
