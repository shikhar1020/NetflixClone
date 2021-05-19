import React, { useEffect } from "react";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Login from "./pages/Login/Login";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const user = null;
  // {
  //   name: "Sangam",
  // };

  useEffect(() => {
    // const unsubscribe =
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      }
    });

    // return unsubscribe;
  }, []);

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
            {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
