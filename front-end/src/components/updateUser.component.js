import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'
import Navbar from "./navbar.component";

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
                <Navbar/>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" className='form-control' value={this.state.name} onChange={this.onChangeName}/>
                    </div>
                    <div className='form-group'>
                        <label>Mobile</label>
                        <input type="text" className='form-control' value={this.state.mobile} onChange={this.onChangeMobile}/>
                    </div>
                    <div className='form-group'>
                        <label>Notification Channel</label>
                        <select value={this.state.notificationChannel} onChange={this.onChangeNotificationChannel} className='form-control'>
                            <option value="email" selected={this.state.notificationChannel=='email'}>Email</option>
                            <option value="sms" selected={this.state.notificationChannel=='sms'}>SMS</option>
                            <option value="call" selected={this.state.notificationChannel=='call'}>Call</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeEmail} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.onChangePassword} className='form-control' />
                    </div><br></br>
                    <button type="submit" className='btn btn-success'>Update Changes</button>
                </form>
            </div>
        )
    }
}