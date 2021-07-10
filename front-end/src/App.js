import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//import "boostrap/dist/css/boostrap.min.css";

import Login from "./components/login.component"
import Navbar from "./components/navbar.component"
import signUp from './components/signUp.component';
import charts from './components/charts.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={signUp}/>
      <Route path="/charts" component={charts}/>
    </Router>
    
  );
}

export default App;
