import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';

class Login extends Component {
	
	state = {
    user: {
    	email:"",
    	password:""
    },
    error: ""
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

  handleLogin = (e) => {
  	e.preventDefault();
  	console.log("login fn()");

  	axios.post('http://localhost:3000/api/v1/users/login', this.state.user)
	  .then((res) => {
	    console.log(res, "login data");
	    if(res.data.success){
  			localStorage.setItem("jwt", res.data.token);
  			this.props.dispatch({ type: "USER_LOGIN_SUCCESS", data: res.data });
  			this.setState({ user: {} });
  			this.props.history.push('/');
  		}
	  })
	  .catch(function (err) {
	    console.log(err, "catch error");
	    // this.setState({ error: "Wrong email please check again" });
	  });
  }

	render() {
		return (
			<div className='login'>
				<form>
				  <h2>Login</h2>
				  <p className="register-error" >{this.state.error}</p>
					{/*<div className="logo">
						<img src="../../public/icon.png" alt="logo" />
					</div>*/}
				  <input onChange={this.handleChange} name='email' placeholder='E-Mail Address' type='text' value={ this.state.user.email } required/>
				  <input onChange={this.handleChange} id='pw' name='password' placeholder='Password' type='password' value={ this.state.user.password } required/>
				  <button type="button" className="button is-success is-small" onClick={this.handleLogin}>Login</button>
				</form>

			  <div className="login-flex">
			  	<p className='forgot'>Don't have an account?</p>
			  	<Link to="/users/register">Register</Link>
			  </div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { state }
}

export default connect(mapStateToProps)(Login);