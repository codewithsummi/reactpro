import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export class Addcategory extends Component {
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
                        <form>
                            <div className="form-group">
                                <label>Cname</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input type="file" className="form-control"/>
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
