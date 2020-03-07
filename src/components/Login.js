import React, { Component } from 'react'
import {URL} from '../url';
export class Login extends Component {
    constructor()
    {
       super();
       this.state={email:'',password:'',msg:''}
    }
    emailData=(event)=>
    {
         this.setState({email:event.target.value})
    }
    passwordData=(event)=>
    {
         this.setState({password:event.target.value})
    }
    loginData=(event)=>
    {
       event.preventDefault();
       let formData={'email':this.state.email,'password':this.state.password};

        fetch(`${URL}adminlogin`,
        { 
            method:'post',
            body:JSON.stringify(formData),
            headers:{
           'Accept':'application/json',
           'Content-Type':'application/json'
                    }
        })
        .then(res=>res.json())
        .then(data=>
            {
               if(data.err==0)
               {
        localStorage.setItem("sid",data.uid);
        this.props.history.push('/dashboard');
               }
               if(data.err==1)
               {
    this.setState({msg:data.msg})
               }
            })
    }
    

    render() {
        return (
            <div>
                <header className="jumbotron">
                   <h1 className="text-center">Admin Panel</h1>
                </header>
                
                <section className="container">
                {this.state.msg!==""?
                <div className="alert alert-danger">{this.state.msg}</div>:null}
                <form onSubmit={this.loginData}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" onBlur={this.emailData}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onBlur={this.passwordData}/>
                </div>
                <div className="form-group">
                <input type="checkbox"/>
                    <label>Remember Me </label>
                </div>
                <input type="submit" value="Login" class="btn btn-success"/>
                </form>
                </section>
            </div>
        )
    }
}

export default Login
