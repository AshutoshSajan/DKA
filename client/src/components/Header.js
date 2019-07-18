import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import LoggedInUser from "./LoggedInUser";

class Header extends Component {

	state = {
		toggleClass: true
	}

	handleLogout = (e) => {
		localStorage.removeItem("jwt");
		this.props.history.push("/login");
	};

	handleToggle = () => {
		this.setState({ toggleClass: !this.state.toggleClass })
	}

	render() {
		const { user } = this.props || null;
		console.log(this.props, user, user.isAuthInProgress, "header props");

		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
			  <div className="navbar-brand">
			  	<Router>
				    <Link to="/" className="navbar-brand">
			    		<div className="logo-container">
						  	<img className="logo" src="/dka.jpeg" alt="logo" width="80" height="80"/>
						  </div>
					  </Link>
				  </Router>

			    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			    </a>
			  </div>

			  <div id="navbarBasicExample" className="navbar-menu">
			    <div className="navbar-start">
						<Router>
							<Link to="/" className="navbar-item">Home</Link>

				      <Link to="/students" className="navbar-item">Students</Link>
				      <Link to="/instructors" className="navbar-item">Instructors</Link>
				      <Link to="/contact" className="navbar-item">Contact</Link>
				      <Link to="/learn" className="navbar-item">Learn</Link>
				      <Link to="/camps" className="navbar-item">Camps</Link>
				      <Link to="/documentation" className="navbar-item">Documentation</Link>
				    </Router>

			      <div className="navbar-item has-dropdown is-hoverable">
			        <a className="navbar-link">
			          More
			        </a>

			        <div className="navbar-dropdown">
				        <Router>
				      		<Link to="/state" className="navbar-item">State</Link>
				      		<Link to="/district" className="navbar-item">District</Link>
				      		<Link to="/national" className="navbar-item">National</Link>
				          <a className="navbar-item">
				            Report an issue
				          </a>
				        </Router>
			        </div>
			      </div>
			    </div>

			    <div className="navbar-end">
			    	{
							!user.user && user.isAuthInProgress ?
					      <div className="navbar-item">
					        <Router className="buttons">
					          <Link
											to="/users/register"
							      	className="button is-primary">
							      	Sign-Up
							      </Link>
					          <Link 
						      		to="/users/login"
						      		className="button is-primary">
						      		Login
						      	</Link>
					        </Router>
					      </div>
			      	:
					    <div className="buttons">
				      	<button 
				      		to="/users/login"
				      		className="button is-primary"
				      		onClick={ this.handleLogout }>
				      		Logout
				      	</button>
				      </div>
			    	}
			    </div>
			  </div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, "hdr map state");
  return { user: state.currentUser };
}

export default connect(mapStateToProps)(Header);
