import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { validateEmail } from '../utils/validateEmail';

class SignUp extends Component {
	state = {
		user: {
			userName: '',
			password: '',
			email: '',
			confirmPassword: ''
		},
		error: ''
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			user: {
				...this.state.user,
				[name]: value
			}
		});
	};

	handleRegister = e => {
		const { userName, password, email, confirmPassword } = this.state.user;

		e.preventDefault();
		var isValidMail = validateEmail(email);

		console.log(isValidMail, 'isValidMail');
		if (!userName) {
			this.setState({ error: 'Please fill up the username feild' });
		} else if (!password) {
			this.setState({ error: 'Please fill up the password feild' });
		} else if (!email) {
			this.setState({ error: 'Please fill up the username feild' });
		} else if (!confirmPassword) {
			this.setState({ error: 'Please fill up the confirmPassword feild' });
		} else if (password.length >= 8 && password === confirmPassword) {
			if (userName.length >= 3 && isValidMail && confirmPassword) {
				fetch('http://localhost:3000/api/v1/users/register', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: localStorage.jwt
					},
					body: JSON.stringify(this.state.user)
				})
					.then(res => res.json())
					.then(data => {
						console.log(data, 'data');
						if (data.success) {
							// this.setState({ user: {} });
							this.props.history.push('/users/login');
						} else {
							console.log(data, 'register err');
							this.setState({ error: 'Please fill all the information' });
						}
					})
					.catch(err => {
						console.log(err, 'fetch error!');
						this.setState({ error: err });
					});
			}
		} else {
			this.setState({ error: 'Please fill all the information' });
		}
	};

	render() {
		return (
			<div className="login">
				<form>
					<h2>Register</h2>
					<p className="error">{this.state.error}</p>

					<input
						required
						type="text"
						name="userName"
						placeholder="Username"
						onChange={this.handleChange}
						value={this.state.user.username}
					/>

					<input
						id="pw"
						required
						name="password"
						type="password"
						placeholder="Password"
						onChange={this.handleChange}
						value={this.state.user.password}
					/>

					<input
						required
						type="password"
						name="confirmPassword"
						onChange={this.handleChange}
						placeholder="Confirm password"
						value={this.state.user.confirmPassword}
					/>

					<input
						required
						type="text"
						name="email"
						placeholder="E-Mail Address"
						onChange={this.handleChange}
						value={this.state.user.email}
					/>

					<input type="submit" value="Register" className="animated" onClick={this.handleRegister} />
				</form>

				<div className="login-flex">
					<p className="forgot">Already have an account?</p>
					<Link to="/users/login">
						<strong>Login</strong>
					</Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { state };
}

export default connect(mapStateToProps)(SignUp);
