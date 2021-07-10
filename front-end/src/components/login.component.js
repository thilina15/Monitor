import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            email:'',
            password:'',
            err:''
        }
    }
    //email saving
    onChangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        });
    }
    //password saving
    onChangePassword = (e)=>{
        this.setState({
            password:e.target.value
        });
    }
    //login 
    onSubmit = (e) => {
        e.preventDefault();
        const user ={
            email:this.state.email,
            password:this.state.password
        }
        
    axios.post('http://localhost:5000/user/login',user)
        .then(res=>{
            if(res.data.jwt){
                localStorage.setItem('user',res.data.jwt)
                console.log('user logined');
                this.props.history.push('/charts')
            }else{
                console.log('invalid login details');
                this.setState({
                    err:'invalid login details',
                    email:'',
                    password:''
                })
            }
        })
        .catch(er=>console.log(er))
    }
    render(){
        return(
            <div>
                <p>New User? <Link to="/signup" >Sign up</Link></p>
                
                <form onSubmit={this.onSubmit}>
                    <div className='form-froup'>
                        <label>Email</label>
                        <input type="email" className='form-control' value={this.state.email} onChange={this.onChangeEmail}/>
                    </div>
                    <div className='form-froup'>
                        <label>Password</label>
                        <input type="password" className='form-control' value={this.state.password} onChange={this.onChangePassword}/>
                    </div>
                    <br></br>
                    <input className='btn btn-success' type="submit"/>
                </form>
                <p style={{color: "red"}}>{this.state.err}</p>
                
            </div>
            
        )
    }
}