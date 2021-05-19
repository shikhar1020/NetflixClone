import React from "react";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./style.css";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Nav />
      <div className="profileBody">
        <h1>Edit Profile</h1>
        <div className="profileInfo">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Avatar"
          />
          <div className="profileDetail">
            <h2>sangam@gmail.com</h2>
            <div className="profilePlans">
              <button onClick={() => auth.signOut} className="signOutButton">
                Sign Out
              </button>
            </div>
            {/* <h2>{user.email}</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
