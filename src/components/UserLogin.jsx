import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your backend API for login
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data=await response.json();
//console.log(data)
      if (response.ok) {
        // Login successful
        setLoginStatus("success");
        // Clear input fields

        setEmail("");
        setPassword("");

        localStorage.setItem("token",data.token)
        // redirect the user to another page after successful login
        navigate("/home");
      } else {
        // Login failed
        const data = await response.json();
        setLoginStatus(data.error || "Login failed.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginStatus("error");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form  onSubmit={handleLogin} >
        <label class="form-label">Email:</label>
        <input
          type="email"
          class="form-control"
          value={email}
          onChange={handleEmailChange}
          required
        />
         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

        <label>Password:</label>
        <input
          type="password"
          class="form-control"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button class="btn btn-primary m-2" type="submit">Login</button>

        {loginStatus === "success" && <p>Login successful!</p>}
        {loginStatus === "error" && <p>{loginStatus}</p>}
      </form>
    </div>
  );
};

export default UserLogin;
