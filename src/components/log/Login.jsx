import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <div className="login-description">
        <div className="login-description-wrap">
          <h3>WECLOME BACK!</h3>
          <p>
            To keep connected with us please login with your personal
            Information
          </p>
        </div>
      </div>
      <LoginForm />
    </>
  );
}

export default Login;
