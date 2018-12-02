import React, { Component } from "react";
import "./index.css";
import LandingPage from './Screens/Landing Page/LandingPage'
import AdminDashboard from './Screens/AdminDashboard/AdminDashboard'
import UnionCouncils from './Screens/UnionCouncils/UnionCouncils'
import Devices from './Screens/Devices/Devices'

import firebase from 'firebase';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/district' component={AdminDashboard} />
            <Route path='/unioncouncils' component={UnionCouncils} />

            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        {/*  */}
      </div>
    );
  }
}

export default App;
