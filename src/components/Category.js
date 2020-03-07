import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
export class Category extends Component {
    addcat=(event)=>
    {
        this.props.history.push('/addcategory')
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
                          <tr>
                              <td colspan={5} align="center">
                                <input type="button" value="Add category" className="btn btn-danger" onClick={this.addcat}/>
                              </td>
                          </tr>
                          <tr>
                              <td>S.No</td>
                              <td>Cname</td>
                              <td>Image</td>
                              <td>Date</td>
                              <td>Action</td>
                          </tr>
                      </table>  
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Category
