import React, {Component} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';

export default class charts extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            readings:[]
        }
    }
    componentDidMount=()=>{
        axios.get('http://localhost:5000/reading/60e552d323e7d6864cd3ac9b')
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
            <div>asd
                <Bar 
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