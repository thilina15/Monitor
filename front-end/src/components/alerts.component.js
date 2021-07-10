import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'
import Navbar from "./navbar.component";

export default class Alerts extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            alerts:[],
            sensors:[],
            sensorID:'',
            userID:''
        }
    }
    componentDidMount=()=>{
        const jwt = localStorage.getItem('user')
        if(jwt){
            this.setState({
                userID:jwtDecode(jwt).userID
            })
            console.log(jwtDecode(jwt).userID)
        }

        axios.get(`http://localhost:5000/sensor/all/${jwtDecode(jwt).userID}`)
        .then(res=>{
            this.setState({
                sensors:res.data.sensors
            })
            console.log(res.data);
        })
        .catch(e=>{
            console.log(e)
        })   
    }

    onChangeSensor = (e)=>{
        this.setState({
            sensorID:e.target.value
        })

        axios.get(`http://localhost:5000/reading/alerts/${e.target.value}`)
        .then(res=>{
            this.setState({
                alerts:res.data.alerts
            })
            console.log(res.data);
        })
        .catch(e=>{
            console.log(e)
        })
    }
    
    render(){
        
        return(
            <div>
                <Navbar/>
                <br></br>
                <div className='col-md-5'>
                    <select value={this.state.sensorID} onChange={this.onChangeSensor} className='form-control'>
                        <option>Select Sensor</option>
                        {this.state.sensors.map((sensor)=>{
                            return <option value={sensor._id}>Sensor ID: {sensor._id}</option>
                        })}
                    </select>
                </div>
                
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>
                                Temp Value
                            </th>
                            <th scope='col'>
                                Date
                            </th>
                            <th scope='col'>
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.alerts.map((alert)=>{
                            return <tr><td>{alert.value}C</td><td>{new Date(alert.time).toLocaleDateString()}</td>
                            <td>{new Date(alert.time).toLocaleTimeString()}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}