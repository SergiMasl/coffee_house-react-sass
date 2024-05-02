import React from "react";
import Logo from "./Logo";
import "./_nav.sass";
import NavBtms from "./NavBtms";
import LogBar from "./LogBar";
import { useState } from "react";

function Navbar() {
  const [isLog, setIsLog] = useState(false);

  return (
    <header className="header-global">
      <nav className="navbar-globalNav">
        <div className="navbar-global-gutters">
          <Logo setIsLog={setIsLog} />
          <div className="globalNav__wrapper">
            {isLog ? (
              ""
            ) : (
              <>
                <NavBtms />
                <LogBar setIsLog={setIsLog} />
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
