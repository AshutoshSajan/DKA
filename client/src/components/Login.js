import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Login extends Component {
	state = {
		user: {
			email: '',
			password: ''
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

	handleLogin = e => {
		e.preventDefault();
		fetch('http://localhost:3000/api/v1/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.jwt
			},
			body: JSON.stringify(this.state.user)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data, 'login data');
				if (data.success) {
					localStorage.setItem('jwt', data.token);
					this.props.dispatch({ type: 'USER_LOGIN_SUCCESS', data: data });
					// this.setState({ user: {} });
					this.props.history.push('/');
				}
			})
			.catch(function(err) {
				console.log(err, 'catch error');
				// this.setState({ error: 'Wrong email please check again' });
			});
	};

	render() {
		return (
			<div className="login">
				<form>
					<h2>Login</h2>
					<p className="error">{this.state.error}</p>
					{/*<div className="logo">
						<img src="../../public/icon.png" alt="logo" />
					</div>*/}
					<input
						required
						type="text"
						name="email"
						placeholder="E-Mail Address"
						onChange={this.handleChange}
						value={this.state.user.email}
					/>
					<input
						id="pw"
						required
						type="password"
						name="password"
						placeholder="Password"
						onChange={this.handleChange}
						value={this.state.user.password}
					/>
					<button type="button" className="button is-success is-small" onClick={this.handleLogin}>
						Login
					</button>
				</form>

				<div className="login-flex">
					<p className="forgot">Don't have an account?</p>
					<Link to="/users/register">Register</Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { state };
}

export default connect(mapStateToProps)(Login);
