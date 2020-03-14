import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import {URL} from '../url';
export class Category extends Component {
    state={catdata:[]}
    addcat=(event)=>
    {
        this.props.history.push('/addcategory')
    }
    componentDidMount()
    {
       fetch(`${URL}getcategory`)
       .then(res=>res.json())
       .then(data=>
        {
            if(data.err==0)
            {
                console.log(data)
                this.setState({catdata:data.cdata})
                console.log(this.state.catdata);
            }
        })
    }
    upCat(id)
    {
         this.props.history.push(`/addcategory/${id}`)
    }
    delCat(id)
    {
        let conf=window.confirm("Do u want to delete?");
        if(conf)
        {
            fetch(`${URL}delcat/${id}`)
            .then(res=>res.json())
            .then(data=>
                {
                    if(data.err==0)
                    {
                        fetch(`${URL}getcategory`)
       .then(res=>res.json())
       .then(data=>
        {
            if(data.err==0)
            {
                console.log(data)
                this.setState({catdata:data.cdata})
                console.log(this.state.catdata);
            }
        })
                    }
                })
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
                    <div className="col-sm-8">
                        <h2>Category</h2>
                      <table className="table">
                          <thead>
                          <tr>
                              <td colspan={5} align="center">
                                <input type="button" value="Add category" className="btn btn-danger" onClick={this.addcat}/>
                              </td>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td>S.No</td>
                              <td>Cname</td>
                              <td>Image</td>
                              <td>Date</td>
                              <td>Action</td>
                          </tr>
                        {this.state.catdata.map((res,i)=>
                             <tr>
                             <td>{i+1}</td>
                             <td>{res.cname}</td>
                             <td><img src={`${URL}${res.image}`} width={100} height={100}/></td>
                             <td>{res.created_at}</td>
                             <td>
                             <input type="button" value="Update" className="btn btn-info" onClick={()=>this.upCat(res._id)}/>
                                 <input type="button" value="Delete" className="btn btn-danger" onClick={()=>this.delCat(res._id)}/>
                             </td>
                         </tr>
                            )}
                          </tbody>
                      </table>  
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Category
