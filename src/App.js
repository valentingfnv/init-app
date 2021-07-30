import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
            <Route path='/profile'><Profile/></Route>
        </Switch>
    </Router>
  );
}

export default App;
