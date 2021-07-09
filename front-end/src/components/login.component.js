import React, {Component} from 'react';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            email:'',
            password:''
        }
    }
    //email saving
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    //password saving
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
    //login 
    onSubmit(e){
        e.preventDefault();
        const user ={
            email:this.state.email,
            password:this.state.password
        }
        console.log(user)
        //window.location = '/';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    Email: <input type="text" value={this.state.email} onChange={this.onChangeEmail}/>
                    password: <input type="password" value={this.state.password} onChange={this.onChangePassword}/>
                    <input type="submit"/>
                </form>
            </div>
            
        )
    }
}