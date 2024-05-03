import React from "react";
import { Link, useLocation } from "react-router-dom";

function LogBar({ setIsLog }) {
  const location = useLocation();

  return (
    <div className="flex-shrink-none">
      <Link
        className="nav-button nav-button--default"
        to="/accaunt/login "
        onClick={() => setIsLog(true)}
      >
        Sign in
      </Link>
      <Link
        className="nav-button nav-button--positive"
        to="/accaunt/create"
        onClick={() => setIsLog(true)}
      >
        Join now
      </Link>
    </div>
  );
}

export default LogBar;
