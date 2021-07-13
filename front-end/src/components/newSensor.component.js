import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'
import Navbar from "./navbar.component";

export default class NewSensor extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            sensorID:'',
            userID:'',
            threshold:0
        }
    }

    onThresholdChanged=(e)=>{
        this.setState({
            threshold:e.target.value
        })
    }

    componentDidMount=()=>{
        const jwt = localStorage.getItem('user')
        if(jwt){
            this.setState({
                userID:jwtDecode(jwt).userID
            })
            console.log(jwtDecode(jwt).userID)
        }
        
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const reqBody= {
            userID:this.state.userID,
            threshold:this.state.threshold
        }

        axios.post('http://localhost:5000/sensor',reqBody)
        .then(res=>{
            this.setState({
                sensorID:res.data.sensorID
            })
            console.log(res.data.sensorID)
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
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Threshold</label>
                        <input type="number" value={this.state.threshold} onChange={this.onThresholdChanged} className='form-control' />
                    </div>
                    <br></br>
                    <button type="submit" className='btn btn-success' >Add Sensor</button>
                </form>
                <p>this is your sensor id: {this.state.sensorID}</p>
            </div>
        )
    }
}