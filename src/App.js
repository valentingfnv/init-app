import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Singin from "./components/singin/Singin";
import Checkin from "./components/checkin/Checkin";
import Edit from "./components/edit/Edit";



function App({state, store}) {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className='container'>
        <Switch>
          <Route path="/profile">
            <Profile state={state.profilePage}/>
          </Route>
          <Route path="/singin">
            <Singin />
          </Route>
          <Route path="/checkin">
            <Checkin />
          </Route>
          <Route>
            <Edit dispatch={store.dispatch.bind(store)}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
