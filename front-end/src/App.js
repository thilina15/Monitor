import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//import "boostrap/dist/css/boostrap.min.css";

import Login from "./components/login.component";
import Navbar from "./components/navbar.component";
import signUp from './components/signUp.component';
import charts from './components/charts.component';
import alerts from './components/alerts.component';
import newSensor from './components/newSensor.component';
import updateUser from './components/updateUser.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={signUp}/>
      <Route path="/charts" component={charts}/>
      <Route path="/alerts" component={alerts}/>
      <Route path="/addSensor" component={newSensor}/>
      <Route path="/updateUser" component={updateUser}/>
    </Router>
    
  );
}

export default App;
