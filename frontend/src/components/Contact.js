import React, { Component } from 'react'
import {URL} from './url';
export class Contact extends Component {
    constructor(props)
    {
      super(props);
      this.state={
          name:'',
          email:'',
          subject:'',
          message:''
      }
    }
    
    handleChange=(event)=>
    {
      const {name,value}=event.target;
      this.setState({[name]:value});
      
    }
    sendContact=(event)=>
    {
        event.preventDefault();
        fetch(`${URL}contact`,
        { 
            method:'post',
            body:JSON.stringify(this.state),
            headers:{
           'Accept':'application/json',
           'Content-Type':'application/json'
                    }
        })
        .then(res=>res.json())
        .then(data=>
        {
            console.log(data);
        })
    }
    render() {
        return (
            <div>
                <div id="contact-page" className="container">
    	<div className="bg">
	    	<div className="row">    		
	    		 <div className="col-sm-12">    			   			
					<h2 className="title text-center">Contact <strong>Us</strong></h2>    			    				    				
					{/* <div id="gmap" className="contact-map">
					</div> */}
				</div>			 		
			</div>    	
    		<div className="row">  	
	    		<div className="col-sm-8">
	    			<div className="contact-form">
	    				<h2 className="title text-center">Get In Touch</h2>
	    				<div className="status alert alert-success" ></div>
				    	<form id="main-contact-form" className="contact-form row" name="contact-form" method="post" onSubmit={this.sendContact}>
				            <div className="form-group col-md-6">
				                <input type="text" name="name" className="form-control" required="required" placeholder="Name" onChange={this.handleChange}/>
				            </div>
				            <div className="form-group col-md-6">
				                <input type="email" name="email" className="form-control" required="required" placeholder="Email" onChange={this.handleChange}/>
				            </div>
				            <div className="form-group col-md-12">
				                <input type="text" name="subject" className="form-control" required="required" placeholder="Subject" onChange={this.handleChange}/>
				            </div>
				            <div className="form-group col-md-12">
				                <textarea name="message" id="message" required="required" className="form-control" rows="2" placeholder="Your Message Here" onChange={this.handleChange}></textarea>
				            </div>                         
				            <div className="form-group col-md-12">
				                <input type="submit" name="submit" className="btn btn-primary pull-right" value="Submit"/>
				            </div>
				        </form>
	    			</div>
	    		</div>
	    		<div className="col-sm-4">
	    			<div className="contact-info">
	    				<h2 className="title text-center">Contact Info</h2>
	    				<address>
	    					<p>E-Shopper Inc.</p>
							<p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
							<p>Newyork USA</p>
							<p>Mobile: +2346 17 38 93</p>
							<p>Fax: 1-714-252-0026</p>
							<p>Email: info@e-shopper.com</p>
	    				</address>
	    				 <div className="social-networks">
	    					<h2 className="title text-center">Social Networking</h2>
							<ul>
								<li>
									<a href="#"><i className="fa fa-facebook"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-google-plus"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-youtube"></i></a>
								</li>
							</ul>
	    				</div> 
	    			</div>
    			</div>    			
	    	</div>  
    	</div>	
    </div>
            </div>
        )
    }
}

export default Contact
