import "./login.css";

export default function Login() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("submit");
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
            <input type="email" placeholder="Email" className="login-input" />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button className="login-button">Login</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
