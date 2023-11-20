import React, { useState } from "react";
import {Link } from 'react-router-dom';
import './login.css';



const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your backend API for registration
      const response = await fetch("https://recipe-books-apps.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Registration successful
        setRegistrationStatus("success");
        // Clear input fields
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        // Registration failed
        const data = await response.json();
        setRegistrationStatus(data.error || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setRegistrationStatus("error");
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label class="form-label">Username:</label>
        <input
          type="text"
          class="form-control"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label class="form-label">Email:</label>
        <input
          type="email"
          class="form-control"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label class="form-label">Password:</label>
        <input
          type="password"
          class="form-control"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        
        <button type="submit" class="btn btn-primary m-2">Register</button>
        <a>Don't have an Account?<Link to="/login">Login</Link></a>

        {registrationStatus === "success" && <p>Registration successful!</p>}
        {registrationStatus === "error" && <p>{registrationStatus}</p>}
      </form>
    </div>
  );
};

export default UserRegister;
