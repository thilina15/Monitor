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
            </ul>
        )
    }
}