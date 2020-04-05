import React, { Component } from 'react'
import {URL} from './url';
import Sidebar from './Sidebar';
export class CategoryProducts extends Component {
    
    componentDidMount()
    {
        const { match: { params } } = this.props;
        console.log(params.cname)
        // fetch(`${URL}fetchproductbycname/${this.state.cname}`)
        // .then(res=>res.json())
        // .then(data=>
        //     {
        //         console.log(data);
        //     })
    }
    render() {
        return (
            <div>
<section>
		<div className="container">
			<div className="row">
                <Sidebar/>
            <div class="col-sm-9 padding-right">
                <h1>Category Products</h1>
            </div>
            </div>
        </div>
        </section>
            </div>
        )
    }
}

export default CategoryProducts
