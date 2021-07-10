import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

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
        .then(res=>{
            this.props.history.push('/')
        })
        .catch(er=>console.log(er))
    }

    render(){
        return(
            <div>
                <p>Already have account? <Link to="/" >Login</Link></p>
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
                            <option value="email">Email</option>
                            <option value="sms">SMS</option>
                            <option value="call">Call</option>
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
                    <button type="submit" className='btn btn-success'>Sign Up</button>
                </form>
            </div>
        )
    }
}