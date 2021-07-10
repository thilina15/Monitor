import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'

export default class UpdateUser extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            name:'',
            email:'',
            password:'',
            mobile:'',
            notificationChannel:'',
            userID:'',
            feedback:''
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

        axios.get(`http://localhost:5000/user/${jwtDecode(jwt).userID}`)
        .then(res=>{
            this.setState({
                name:res.data.name,
                email:res.data.email,
                password:res.data.password,
                mobile:res.data.mobile,
                notificationChannel:res.data.notificationChannel,
            })
            console.log(res.data);
        })
        .catch(e=>{
            console.log(e)
        })   
    }

    
    //set Email
    onChangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        });
    }
    //set password
    onChangePassword=(e)=>{
        this.setState({
            password:e.target.value
        });
    }
    //set name
    onChangeName=(e)=>{
        this.setState({
            name:e.target.value
        });
    }
    //set mobile
    onChangeMobile=(e)=>{
        this.setState({
            mobile:e.target.value
        });
    }
    //set notification channel
    onChangeNotificationChannel=(e)=>{
        this.setState({
            notificationChannel:e.target.value
        });
    }
    //sign up 
    onSubmit=(e)=>{
        e.preventDefault();
        const user ={
            id:this.state.userID,
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            mobile:this.state.mobile,
            notificationChannel:this.state.notificationChannel
        }
        axios.put('http://localhost:5000/user',user)
        .then(res=>{
            this.setState({
                feedback:res.data
            })
        })
        .catch(er=>console.log(er))
    }
    
    render(){
        
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    Name: <input type="text" value={this.state.name} onChange={this.onChangeName}/>
                    Mobile: <input type="text" value={this.state.mobile} onChange={this.onChangeMobile}/>
                    Notification Channel:
                    <select value={this.state.notificationChannel} onChange={this.onChangeNotificationChannel}>
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                        <option value="call">Call</option>
                    </select>
                    Email: <input type="text" value={this.state.email} onChange={this.onChangeEmail}/>
                    password: <input type="password" value={this.state.password} onChange={this.onChangePassword}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}