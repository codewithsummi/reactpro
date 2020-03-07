import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import {URL} from '../url';
export class Changepass extends Component {
    constructor()
    {
        super();
        this.state={op:'',np:'',cp:'',errMsg:'',sussMsg:''}
    }
    getop=(event)=>
    {
        this.setState({op:event.target.value})
    }
    getnp=(event)=>
    {
        this.setState({np:event.target.value})
    }
    getcp=(event)=>
    {
        this.setState({cp:event.target.value})
    }
    cpass=(event)=>
    {
        event.preventDefault();
        if(this.state.np==this.state.cp)
        {
            let fData={'op':this.state.op,'np':this.state.np,'cp':this.state.cp,'uid':localStorage.getItem('sid')};
    fetch(`${URL}changepassword`,
        { 
            method:'post',
            body:JSON.stringify(fData),
            headers:{
           'Accept':'application/json',
           'Content-Type':'application/json'
                    }
        })
        .then(res=>res.json())
        .then(data=>{
            //console.log(data)
            if(data.err==0)
            {
                console.log(data)
                this.setState({sussMsg:data.msg})
            }
            if(data.err==1)
            {
                //console.log(data)
                this.setState({errMsg:data.msg})
            }
        })
        }
        else 
        {
            this.setState({errMsg:"Np and Cp are not match"});
        }
    }
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <section className="row container">
                    <div className="col-sm-4">
                        <Sidebar/>
                    </div>
                    <div className="col-sm-4">
                        <h2>Change Password</h2>
                        {this.state.errMsg?
                        <div className="alert alert-danger">
                            {this.state.errMsg}
                        </div>:null}
                        {this.state.sussMsg?
                        <div className="alert alert-success">
                            {this.state.sussMsg}
                        </div>:null}
                    <form onSubmit={this.cpass}>
                        <div classNam="form-group">
                <label>Op</label>
                <input type="password" className="form-control" onBlur={this.getop}/> 
                        </div>
                        <div classNam="form-group">
                <label>Np</label>
                <input type="password" className="form-control" onBlur={this.getnp}/> 
                        </div>
                        <div classNam="form-group">
                <label>Cp</label>
                <input type="password" className="form-control" onBlur={this.getcp}/> 
                        </div>
                <input type="submit" value="Submit" className="btn btn-success"/>

                    </form>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Changepass
