import React, { useEffect, useRef } from "react";
import { auth } from "../../firebase";
import "./style.css";

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    console.log(auth);
  }, []);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        // alert(`Sign In Sucessufull ${emailRef.current.value}`);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        // alert(`Sign In Sucessufull ${emailRef.current.value}`);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="newToNetflix">New to Netflix? </span>
          <span onClick={register} className="signUpLink">
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
