import React, { useState } from "react";
import SignUp from "../../components/SignUp/SignUp";
import "./style.css";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="loginBackground">
        <img
          className="loginLogo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        {!signIn && (
          <button onClick={() => setSignIn(true)} className="loginSignInButton">
            Sign In
          </button>
        )}
      </div>
      <div className="loginGradient" />
      <div className="loginBody">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginInput">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="getstartedButton"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
