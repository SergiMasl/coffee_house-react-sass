import React from "react";
import StarImg from "../../styles/img/star-svg.svg";

function RewardHead() {
  return (
    <div className="gl-rw">
      <div className="global-rw-wrapper">
        <h3 className="global-rw-title">ENJOY YOUR REWARD PROGRAM</h3>
        <img src={StarImg} className="global-rw-star" />
      </div>
    </div>
  );
}

export default RewardHead;
