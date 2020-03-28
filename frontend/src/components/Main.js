import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
export class Main extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <section>
		<div className="container">
			<div className="row">
                <Sidebar/>
            <div class="col-sm-9 padding-right">
                <h1>Latest Products</h1>
            </div>
            </div>
        </div>
        </section>
            </div>
        )
    }
}

export default Main
