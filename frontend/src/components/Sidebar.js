import React, { Component } from 'react'
import {URL} from './url';
import {Link} from 'react-router-dom';
export class Sidebar extends Component {
    state={cdata:[]}
	componentDidMount()
	{
        console.log("hello")
	   fetch(`${URL}getcategory`)
	   .then(res=>res.json())
	   .then(data=>{
           console.log(data)
		   if(data.err==0)
		   {
              this.setState({cdata:data.cdata});
		   }
	   })
	}
    render() {
        return (
            <div>
                <div className="col-sm-3">
					<div className="left-sidebar">
						<h2>Category</h2>
						<div className="panel-group category-products" id="accordian">
                            {this.state.cdata.map(data=>
                            <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title"><Link to={`/category-products/${data.cname}`}>{data.cname}</Link></h4>
                            </div>
                            </div>
                                )}
							
							</div>
					
						<div className="brands_products">
							<h2>Brands</h2>
							<div className="brands-name">
								<ul className="nav nav-pills nav-stacked">
									<li><a href="#"> <span className="pull-right">(50)</span>Acne</a></li>
									<li><a href="#"> <span className="pull-right">(56)</span>Grüne Erde</a></li>
									<li><a href="#"> <span className="pull-right">(27)</span>Albiro</a></li>
									<li><a href="#"> <span className="pull-right">(32)</span>Ronhill</a></li>
									<li><a href="#"> <span className="pull-right">(5)</span>Oddmolly</a></li>
									<li><a href="#"> <span className="pull-right">(9)</span>Boudestijn</a></li>
									<li><a href="#"> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
								</ul>
							</div>
						</div>
						
						<div className="price-range">
							<h2>Price Range</h2>
							{/* <div className="well text-center">
								 <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" ><br />
								 <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
							</div> */}
						</div>
						
						<div className="shipping text-center">
							<img src="images/home/shipping.jpg" alt="" />
						</div>
					
					</div>
				</div>
            </div>
        )
    }
}

export default Sidebar
