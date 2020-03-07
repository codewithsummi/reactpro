import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <section className="row container">
                    <div className="col-sm-4">
                        <Sidebar/>
                    </div>
                    <div className="col-sm-4">
                        <h2>Welcome to Dashboard</h2>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Dashboard
