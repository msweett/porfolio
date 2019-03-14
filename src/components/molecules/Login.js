import React from "react";

const Login = props => (
  <nav className="login">
    <h2>Login</h2>
    <p>Sign in</p>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Login with Facebook
    </button>
  </nav>
);

export default Login;
