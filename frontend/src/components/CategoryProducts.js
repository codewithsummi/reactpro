import React, { Component } from 'react'
import {URL} from './url';
export class CategoryProducts extends Component {
    state={cname:this.props.match.params.cname}
    componentDidMount()
    {
        fetch(`${URL}fetchproductbycname/${this.state.cname}`)
        .then(res=>res.json())
        .then(data=>
            {
                console.log(data);
            })
    }
    render() {
        return (
            <div>
                <h1>Category Products</h1>
            </div>
        )
    }
}

export default CategoryProducts
