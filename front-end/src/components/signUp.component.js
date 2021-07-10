import React, {Component} from 'react';
import axios from 'axios'

export default class SignUp extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            password:'',
            mobile:'',
            notificationChannel:''
        }
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
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            mobile:this.state.mobile,
            notificationChannel:this.state.notificationChannel
        }
        axios.post('http://localhost:5000/user',user)
        .then(res=>console.log(res))
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