import React, { useEffect } from "react";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const user = useSelector(selectUser);

  // const user = {
  //   name: "Sangam",
  // };

  // useEffect(() => {
  //   console.log("User Data is ", user);
  // }, [user]);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        // console.log(userAuth);
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            {/* <Route path="/users">
            <Users />
          </Route> */}
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
