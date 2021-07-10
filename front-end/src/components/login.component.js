import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            email:'',
            password:''
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
                console.log(res.data.jwt)
            }else{
                console.log('invalid login details');
            }
        })
        .catch(er=>console.log(er))
        //window.location = '/';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    Email: <input type="email" value={this.state.email} onChange={this.onChangeEmail}/>
                    password: <input type="password" value={this.state.password} onChange={this.onChangePassword}/>
                    <input type="submit"/>
                </form>
            </div>
            
        )
    }
}