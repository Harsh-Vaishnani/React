import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:4040/api")
      .then((response) => {
        const users = response.data;
        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          setUser(user);
          setMessage("Login Successful!");
          navigate("/");
        } else {
          alert("Please Sign Up First");
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setMessage("Error fetching user data.");
      });
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button className="login-button" type="submit">Login</button>
          <button
            className="signup-button"
            type="button"
            onClick={handleSignUpRedirect}
          >
            Sign Up
          </button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
