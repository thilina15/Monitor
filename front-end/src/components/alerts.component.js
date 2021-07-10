import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'

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
                <select value={this.state.sensorID} onChange={this.onChangeSensor}>
                    {this.state.sensors.map((sensor)=>{
                        return <option value={sensor._id}>{sensor._id}</option>
                    })}
                </select>
                <table>
                    <tr>
                        <th>
                            value
                        </th>
                        <th>
                            time
                        </th>
                    </tr>
                    {this.state.alerts.map((alert)=>{
                        return <tr><td>{alert.value}</td><td>{alert.time}</td></tr>
                    })}
                </table>
            </div>
        )
    }
}