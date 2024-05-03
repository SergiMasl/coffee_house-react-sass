import React from "react";
import { useLocation } from "react-router-dom";
import SingUp from "./SingUp";
import Login from "./Login";
import "./_loging.sass";

function LogPage() {
  const location = useLocation();
  const { pathname } = location;
  const isLogin = pathname.endsWith("login");

  return (
    <section className="log-layout">
      <div className="log-wrapper">{isLogin ? <Login /> : <SingUp />}</div>
    </section>
  );
}

export default LogPage;
