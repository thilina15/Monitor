import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//import "boostrap/dist/css/boostrap.min.css";

import Login from "./components/login.component"
import Navbar from "./components/navbar.component"
import signUp from './components/signUp.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={signUp}/>
    </Router>
    
  );
}

export default App;
