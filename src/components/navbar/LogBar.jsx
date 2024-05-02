import React from "react";

function LogBar({ setIsLog }) {
  return (
    <div className="flex-shrink-none">
      <a
        className="nav-button nav-button--default"
        href="#"
        onClick={() => setIsLog(true)}
      >
        Sign in
      </a>
      <a
        className="nav-button nav-button--positive"
        href="#"
        onClick={() => setIsLog(true)}
      >
        Join now
      </a>
    </div>
  );
}

export default LogBar;
