import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../headLogo.png";
import "./style.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav  ${show && `navBlack`}`}>
      <div className="navContent">
        <Link to="/">
          <img className="navLogo" src={logo} alt="Netflix Logo" />
        </Link>
        <Link to="/profile">
          <img
            className="navAvatar"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Avatar"
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
