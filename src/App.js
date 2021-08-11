import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import ProfileContainer from "./components/profile/ProfileContainer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Singin from "./components/singin/Singin";
import Checkin from "./components/checkin/Checkin";
import EditContainer from "./components/edit/EditContainer";



function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className='container'>
        <Switch>
          <Route path="/profile">
            <ProfileContainer/>
          </Route>
          <Route path="/singin">
            <Singin />
          </Route>
          <Route path="/checkin">
            <Checkin />
          </Route>
          <Route>
            <EditContainer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
