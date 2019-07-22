import React, { Component } from 'react';
import axios from 'axios';

import { validateEmail } from "../utils/validateEmail";

class Register extends Component {

	state = {
		user: {},
		error: {},
		terms: false
	}

	handleChange = (e) => {
		const { name , value } = e.target;
		this.setState( state => ({
			user : {
				...state.user,
				[name]: value 
			}
		}));
	}

	handleSubmit = (e) => {
		const { user } = this.state;
		var isValidMail = validateEmail(user.email);
		var token = localStorage.getItem("jwt");

		console.log(user, isValidMail, "register form");
		// if(user.firstName && user.lastName && user.mothersName && user.address && user.currentAddress && user.info && user.phone && user.email && user.dob && user.profession && user.pin){

		// 		console.log("inside axios....");
		// 		axios.post('http://localhost:3000/api/v1/organisation/register',
		// 			{
  //         	headers: { "Authorization" : token }
  //       	}, user )
		// 		  .then((res) => {
		// 		    console.log(res, "data");
		// 		    if(res.data.success){
		// 	  			this.setState({ user: {} });
		// 	  			this.props.history.push('/users/login');
		// 	  		} else {
		// 	  			console.log(res, "register err");
		// 	  			this.setState( { error: "Please fill all the information" });
		// 	  		}
		// 		  })
		// 		  .catch(error => {
		// 		    console.log(error, "exios fetch error!");
		// 		   	// this.setState( { error: "User already exist" });
		// 		  });
		// } else {
		// 	this.setState({ error: "Please fill up all the feilds" });
		// }

		if(user.firstName && user.lastName && user.mothersName && user.address && user.currentAddress && user.info && user.phone && user.email && user.dob && user.profession && user.pin){

			fetch('http://localhost:3000/api/v1/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify(user),
	    })
	    .then(res => res.json())
	    .then(data => console.log(data, "registerd data"));
		}
	}

	render() {
		return (
			<div className="container" style={{ border: "1px solid rgba(0,0,0,0.2)", padding: "2.5rem 4rem", borderRadius:'4px', width: "50%", margin:"0 auto"}}>
					
				{/*<p className="register-error">{ this.state.error || "" }</p> */}
				<div style={{display:'flex', alignItems:'center', flexWrap:'wrap', paddingBottom: '2rem'}}>
					<img style={{ marginRight:'20px'}}src="/dka.jpeg" alt="logo" height="50" width="50"/>
					<p>Wellcome to Dhauladhar Karate Acedemy plese fill up the form to join us</p>
				</div>
				<div style={{ display: "flex" , justifyContent:'space-between', flexWrap:'wrap'}}>
					<div className="field">
					  <div className="field">
						  <p className="label">First Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input
						    	required
						    	type="text"
						    	name="firstName"
						    	placeholder="First Name"
						    	className="input is-success"
						    	onChange={this.handleChange}
						    	value={ this.state.firstName }
						    	/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">
						  	{this.state.error.username}
						  </p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Last Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input
						    	type="text"
						    	name="lastName"
						    	placeholder="Last Name"
						    	className="input is-success"
						    	value={ this.state.lastName }
						    	onChange={this.handleChange}
						    	/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.lastName}</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Mothers Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input
						    	type="text"
						    	name="mothersName"
						    	placeholder="Mothers Name"
						    	onChange={this.handleChange}
						    	className="input is-success"
						    	value={ this.state.mothersName }
						    	/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">
						  	{this.state.error.mothersName}
						  </p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Permanent Address</p>
						  <div className="control has-icons-left has-icons-right">
						    <input
						    	required
						    	type="text"
						    	name="address"
						    	className="input is-success"
						    	placeholder="VPO-Dist-state"
						    	value={ this.state.address }
						    	onChange={this.handleChange}
						    	/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">
						  	{this.state.error.address}
						  </p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Current Address</p>
						  <div className="control has-icons-left has-icons-right">
						    <input
						    	required
						    	type="text"
						    	name="currentAddress"
						    	className="input is-success"
						    	placeholder="VPO-Dist-state"
						    	onChange={this.handleChange}
						    	value={ this.state.currentAddress }
						    	/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">
						  	{this.state.error.currentAddress}
						  </p>
						</div>
					</div>
					
					<div className="field">
					  <div className="field">
						  <p className="label">Phone</p>
						  <div className="control has-icons-left has-icons-right">
						    <input
						    	required
						    	type="text"
						    	name="phone"
						    	value={ this.state.phone }
						    	placeholder="Mobile number"
						    	className="input is-success"
						    	onChange={this.handleChange}
						    	/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">
						  	{this.state.error.phone}
						  </p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">DOB</p>
						  <div className="control has-icons-left has-icons-right">
						    <input
						    	required
						    	name="dob"
						    	type="date"
						    	placeholder="DOB"
						    	value={ this.state.dob }
						    	className="input is-success"
						    	onChange={this.handleChange}
						    	/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">
						  	{this.state.error.dob}
						  </p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">PIN</p>
						  <div className="control has-icons-left has-icons-right">
						    <input
						    	required
						    	name="pin"
						    	type="number"
						    	value={ this.state.pin }
						    	placeholder="PIN/zip code"
						    	className="input is-success"
						    	onChange={this.handleChange}
						    	/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">
						  	{this.state.error.pin}
						  </p>
						</div>
					</div>
				</div>

				<div className="field">
				  <p className="label">Email</p>
				  <div className="control has-icons-left has-icons-right">
				    <input
				    	required
				    	type="email"
				    	name="email"
				    	value={ this.state.email }
				    	className="input is-danger"
				    	onChange={this.handleChange}
				    	placeholder="example@gmail.com"
				    	/>
				    <span className="icon is-small is-left">
				      <i className="fas fa-envelope"></i>
				    </span>
				    <span className="icon is-small is-right">
				      <i className="fas fa-exclamation-triangle"></i>
				    </span>
				  </div>
				  <p className="help is-danger">
				  	{this.state.error.email}
				  </p>
				</div>

				<div style={{display:"flex" }}>
					<div className="field">
					  <p className="p">Weight</p>
					  <div className="control">
					    <div className="select" style={{marginRight:'20px'}}>
					      <select name="weight" onChange={this.handleChange}>
					        <option>Weight-range</option>
					        <option>35-40</option>
					        <option>40-45</option>
					        <option>45-50</option>
					        <option>50-55</option>
					        <option>55-60</option>
					        <option>60-65</option>
					        <option>65-70</option>
					        <option>70-75</option>
					        <option>75-80</option>
					      </select>
					    </div>
					  </div>
					</div>
				

					<div className="field">
					  <p className="p">What you do ?</p>
					  <div className="control">
					    <div className="select">
					      <select
					      	name="profession"
					      	onChange={this.handleChange}
					      	>
					        <option>I am a ?</option>
					        <option>Student</option>
					        <option>Buisnessman</option>
					        <option>Govt. employe</option>
					        <option>Teacher</option>
					      </select>
					    </div>
					  </div>
					</div>
				</div>

				<div className="field">
				  <p className="label">Why Karate</p>
				  <div className="control">
				    <textarea 
				    	name="info"
				    	className="textarea"
				    	value={this.state.info}>
				    	onChange={this.handleChange}
				    	placeholder="Please tell us why you want to learn Karate ?"
				    	</textarea>
				  </div>
				</div>

				<div className="field">
				  <div className="control">
				    <p className="checkbox">
				      <input type="checkbox" name="terms"/>
				      I agree to the <a href="#">terms and conditions</a>
				    </p>
				  </div>
				</div>

				<div className="field">
				  <div className="control">
				    <p className="radio">
				      <input 
				      	type="radio"
				      	name="terms"
				      	value={this.state.terms}
				      	onChange={this.handleChange} 
				      	/>
				      Yes
				    </p>
				    <p className="radio">
				      <input
				      	type="radio"
				      	name="terms"
				      	value={this.state.terms}
				      	onChange={this.handleChange}
				      	/>
				      No
				    </p>
				  </div>
				</div>

				<div className="field is-grouped">
				  <div className="control">
				    <button
				    	className="button is-link"
				    	onClick={this.handleSubmit}
				    	>
				    	Submit
				    </button>
				  </div>
				  <div className="control">
				    <button className="button is-text">Cancel</button>
				  </div>
				</div>
			</div>
		);
	}
}

export default Register;
