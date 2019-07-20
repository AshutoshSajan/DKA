import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';

import { validateEmail } from "../utils/validateEmail";

class SignUp extends Component {

	state = {
		user: {
			username: "",
			password: "",
			email: "",
			confirmPassword: ""
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
		 user: {
				...this.state.user,
				[name]: value 
			} 
		});
	}

	handleRegister = (e) => {
		const { username, password, email, confirmPassword } = this.state.user;

		e.preventDefault();
		var isValidMail = validateEmail(email);

		console.log(isValidMail, "isValidMail");
		
		if(password.length >= 8 && password === confirmPassword ){
			if(username.length >= 3 && isValidMail && confirmPassword){
				axios.post('http://localhost:3000/api/v1/users/register', this.state.user)
			  .then((res) => {
			    console.log(res, "data");
			    if(res.data.success){
		  			this.setState({ user: {} });
		  			this.props.history.push('/users/login');
		  		} else {
		  			console.log(res, "register err");
		  			this.setState( { error: "Please fill all the information" });
		  		}
			  })
			  .catch(error => {
			    console.log(error, "exios fetch error!");
			   	this.setState( { error: "User already exist" });
			  });
			}
		}else {
			this.setState({ error: "Please fill all the information" })
		}
	}

	render() {
		return (
			<div className='login'>
				<form>
				  <h2>Register</h2>
					<p className="register-error" >{this.state.error || ""}</p>
				  <input onChange={this.handleChange} name='username' placeholder='Username' type='text' value={ this.state.user.username } required/>
				  <input onChange={this.handleChange} id='pw' name='password' placeholder='Password' type='password' value={ this.state.user.password } required/>
				  <input onChange={this.handleChange} name='confirmPassword' placeholder='Confirm password' type='password' value={ this.state.user.confirmPassword} required/>
				  <input onChange={this.handleChange} name='email' placeholder='E-Mail Address' type='text' value={ this.state.user.email } required/>
				  <input className='animated' type='submit' value='Register' onClick={this.handleRegister}/>
				  </form>
				  <div className="login-flex">
				  	<p className='forgot'>Already have an account?</p>
			  		<Link to="/users/login"><strong>Login</strong></Link>
				  </div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { state }
}

export default connect(mapStateToProps)(SignUp);
