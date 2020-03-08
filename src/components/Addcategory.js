import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import {URL} from '../url';
export class Addcategory extends Component {
    state={cname:'',myImage:'',errMsg:'',succMsg:''}
    getCname=(event)=>
    {
        this.setState({cname:event.target.value})
    }
    getAttach=(event)=>
    {
        
        if(event.target.files.length>0)
        {
            
            this.setState({myImage:event.target.files[0]});
            
        }
    }
    postCat=(event)=>
    {
        event.preventDefault();
        if(this.state.myImage!="")
        {
            let formdata=new FormData();
            formdata.append('cname',this.state.cname);
            formdata.append('attach',this.state.myImage);
        fetch(`${URL}addcategory`,
        { 
            method:'post',
            body:formdata,
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
                console.log(data)
                this.setState({errMsg:data.msg})
            }
        })
    
        }
        else 
        {
            this.setState({errMsg:"Plz select a image"})
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
                        <h2>Add category</h2>
                        <form onSubmit={this.postCat}>
                            <div className="form-group">
                                <label>Cname</label>
                                <input type="text" className="form-control" onBlur={this.getCname}/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input type="file" className="form-control" onChange={this.getAttach}/>
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

export default Addcategory
