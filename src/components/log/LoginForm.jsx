import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can perform validation, authentication, etc.
    // For simplicity, let's just check if both fields are filled
    if (username.trim() !== "" && password.trim() !== "") {
      // Assuming successful login
      setLoggedIn(true);
    } else {
      alert("Please fill in both username and password.");
    }
  };

  return (
    <form className="login-form-wrap">
      <h3>Login</h3>
      <p>Sing your account</p>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <div className="password-wrap">
        <div className="password-wrap-showpass">
          <input
            className="checkbox-style"
            type="checkbox"
            //   checked={showPassword}
            //   onChange={() => setShowPassword(!showPassword)}
          />
          <label>Show Password</label>
        </div>

        <a className="forgot-pass">Forget password</a>
      </div>

      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <div>
        <p>Don't have accaunt</p>
        <a>Sing Up</a>
      </div>
    </form>
  );
}

export default LoginForm;
