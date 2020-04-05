import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import {fetchProduct} from '../services/Myser';
export class Main extends Component {
    state={prodata:[]}
    componentDidMount()
    {
        fetchProduct()
        .then(res=>res.json())
        .then(data=>
            {
                console.log(data)
                if(data.err==0)
                {
             this.setState({prodata:data.pdata})
                }
            })
    }
    render() {
        return (
            <div>
                <Slider/>
                <section>
		<div className="container">
			<div className="row">
                <Sidebar/>
            <div class="col-sm-9 padding-right">
            <div className="features_items">
    <h2 className="title text-center">Latest Products</h2>
    {this.state.prodata.map(pro=>
    <div className="col-sm-4">
        <div className="product-image-wrapper">
            <div className="single-products">
                    <div className="productinfo text-center">
                        <img src={`images/pimages/${pro.image}`} alt="" />
                        <h2>Rs.{pro.price}</h2>
                        <p>{pro.pname}</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    {/* <div className="product-overlay">
                        <div className="overlay-content">
                        <h2>Rs.{pro.price}</h2>
                        <p>{pro.pname}</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                    </div> */}
            </div>
            
        </div>
    </div>
    )}
    
</div>

            </div>
            </div>
        </div>
        </section>
            </div>
        )
    }
}

export default Main
