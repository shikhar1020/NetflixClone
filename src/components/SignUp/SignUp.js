import React from "react";
import "./style.css";

function SignUp() {
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="newToNetflix">New to Netflix? </span>
          <span className="signUpLink"> Sign up now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
