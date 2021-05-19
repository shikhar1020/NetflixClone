import React from "react";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
