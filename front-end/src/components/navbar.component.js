import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    
    render(){
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/charts">Charts</Link>
                </li>
                <li>
                    <Link to="/alerts">alerts</Link>
                </li>
                <li>
                    <Link to="/addSensor">Add Sensor</Link>
                </li>
                <li>
                    <Link to="/updateUser">Update User</Link>
                </li>
            </ul>
        )
    }
}