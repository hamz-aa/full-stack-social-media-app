import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Social</h3>
          <span className="login-desc">
            Connect with friends and the world around you on social.
          </span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleClick}>
            <input
              required
              ref={username}
              type="text"
              placeholder="Username"
              className="login-input"
            />
            <input
              required
              ref={email}
              type="email"
              placeholder="Email"
              className="login-input"
            />
            <input
              required
              ref={password}
              type="password"
              placeholder="Password"
              className="login-input"
              minLength={6}
            />
            <input
              required
              ref={passwordAgain}
              type="password"
              placeholder="Password Again"
              className="login-input"
            />
            <button className="login-button" type="submit">
              Sign Up
            </button>
            <button className="login-register-button">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
