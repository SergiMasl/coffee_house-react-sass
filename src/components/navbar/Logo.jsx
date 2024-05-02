import React from "react";
import Img from "../../styles/img/logo.png";

function Logo({ setIsLog }) {
  return (
    <div className="logo-wrap">
      <a href="" className="logo-link" onClick={() => setIsLog(false)}>
        <img src={Img} alt="Logo" className="logo-img" />
      </a>
    </div>
  );
}

export default Logo;
