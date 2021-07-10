import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    constructor(props){
        super(props);
    }
    onSubmit = (e)=>{
        e.preventDefault();
        localStorage.removeItem('user')
        window.location.replace('/')
    }

    render(){
        return(
            <nav className='navbar navbar-dark bg-dark'>
                <div className="container-fluid">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/charts" class="nav-link px-2 text-white">Charts</Link></li>
                        <li><Link to="/alerts" class="nav-link px-2 text-white">Alerts</Link></li>
                        <li><Link to="/addSensor" class="nav-link px-2 text-white">Add new Sensor</Link></li>
                        <li><Link to="/updateUser" class="nav-link px-2 text-white">Update User</Link></li>
                    </ul>
                    <div className="text-end">
                        <form>
                        <button type='submit' className="btn btn-danger" onClick={this.onSubmit}>LogOut</button>
                        </form>
                        
                    </div>
                </div>
            </nav>
        )
    }
}


