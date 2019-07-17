import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
const axios = require('axios');

class SignUp extends Component {

	constructor(props){
		super(props);
		this.state = {
			user: {
				username: "",
				password: "",
				email: "",
				terms: false,
				confirmPassword: ""
			}
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		if(name === "terms"){
			this.setState({ 
				user: {
					...this.state.user,
					[name]: !this.state.user[name]
				}
			})
		}else {
			this.setState({
			 user: {
					...this.state.user,
					[name]: value 
				} 
			});
		}
	}

	handleRegister = (e) => {
		const { username, password, email, terms, confirmPassword } = this.state.user;

		e.preventDefault();

		// TODO: write an email validation function
		
		if(pasword.length >= 8 && password === confirmPassword ){
			if(username.length >= 3 && email.include("@gmail.com") && terms && confirmPassword){
				axios.post('http://localhost:3000/api/v1/users/register', this.state.user)
			  .then((res) => {
			    console.log(res, "data");
			    if(res.data.success){
		  			this.setState({ user: {} });
		  			this.props.history.push('/users/login');
		  		} else {
		  			console.log(res.error, "register err");
		  			this.setState( { error: "Please fill all the information" });
		  		}
			  })
			  .catch(error => {
			    console.log(error, "exios fetch error!");
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
				  {/*<div className="logo">
						<img src="../../public/icon.png" alt="logo" />
					</div>*/}
					<p className="register-error" >{this.state.error || ""}</p>
				  <input onChange={this.handleChange} name='username' placeholder='Username' type='text' value={ this.state.user.username } required/>
				  <input onChange={this.handleChange} id='pw' name='password' placeholder='Password' type='password' value={ this.state.user.password } required/>
				  <input onChange={this.handleChange} name='confirmPassword' placeholder='Confirm password' type='password' value={ this.state.user.confirmPassword} required/>
				  <input onChange={this.handleChange} name='email' placeholder='E-Mail Address' type='text' value={ this.state.user.email } required/>
				  <div className='agree'>
				    <input id='agree' name='terms' type='checkbox' checked={ this.state.user.terms } onChange={this.handleChange} required/>
				    <label htmlFor='agree'></label>Accept rules and conditions
				  </div>
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
