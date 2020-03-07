import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
export class Header extends Component {
  state={sid:localStorage.getItem("sid")}
  componentDidMount()
  {
    if(this.state.sid==null)
    {
      this.props.history.push("/");
    }
  }
  logOut=()=>
  {
    Swal.fire({
      title: 'Are you want to sure?',
      text: 'You will redirect to login page!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem("sid");
     this.props.history.push("/");
     
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      
      }
    })
    //Swal.fire("Alert","Message","success")
    // let x=window.confirm("Do u want to logout ?");
    // if(x)
    // {
    // localStorage.removeItem("sid");
    // this.props.history.push("/");
    // }
  }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
      
      <Link to="/dashboard" className="nav-link">Home</Link>
    </li>
    <li className="nav-item">
    <Link to="/changepass" className="nav-link">Change Password</Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="javascript:void()">Welcome : {this.state.sid}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="javascript:void(0)" onClick={this.logOut}>Logout</a>
    </li>
  </ul>
</nav>
            </div>
        )
    }
}

export default Header
