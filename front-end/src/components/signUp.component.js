import React, {Component} from 'react';

export default class signUp extends Component{
    
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeNotificationChannel = this.onChangeNotificationChannel.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name:'',
            email:'',
            password:'',
            mobile:'',
            notificationChannel:''
        }
    }

    //set Email
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    //set password
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
    //set name
    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }
    //set mobile
    onChangeMobile(e){
        this.setState({
            mobile:e.target.value
        });
    }
    //set notification channel
    onChangeNotificationChannel(e){
        this.setState({
            notificationChannel:e.target.value
        });
    }
    //sign up 
    onSubmit(e){
        e.preventDefault();
        const user ={
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            mobile:this.state.mobile,
            notificationChannel:this.state.notificationChannel
        }
        console.log(user)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    Name: <input type="text" value={this.state.name} onChange={this.onChangeName}/>
                    Mobile: <input type="text" value={this.state.mobile} onChange={this.onChangeMobile}/>
                    Notification Channel: <input type="text" value={this.state.notificationChannel} onChange={this.onChangeNotificationChannel}/>
                    Email: <input type="text" value={this.state.email} onChange={this.onChangeEmail}/>
                    password: <input type="password" value={this.state.password} onChange={this.onChangePassword}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}