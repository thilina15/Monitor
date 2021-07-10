import React, {Component} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import jwtDecode from 'jwt-decode'

export default class Charts extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            readings:[],
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

        axios.get(`http://localhost:5000/reading/${e.target.value}`)
        .then(res=>{
            this.setState({
                readings:res.data.values
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
                <Line  
                    data={{
                         datasets:[{
                            label: 'Sensor Reading',
                            data: this.state.readings,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            parsing:{
                                yAxisKey:'value'
                            }
                        }]
                    }}
                    width={600}
                    height={400}
                    options={{
                        parsing:{
                            xAxisKey:'time'
                        }
                    }}
                />
            </div>
        )
    }
}