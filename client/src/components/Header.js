import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {

	state = {
		toggleClass: true
	}

	handleLogout = (e) => {
		localStorage.removeItem("jwt");
		this.props.history.push("/");
		window.location.reload();
	};

	handleToggle = () => {
		this.setState({ toggleClass: !this.state.toggleClass })
	}

	showHamburger = (e) => {
		console.log(e.target.dataset);
	}

	render() {
		const { user } = this.props || null;
		// console.log(this.props, user, user.isAuthInProgress, "header props");

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

			    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
			    onClick={this.showHamburger}>
			      <span aria-hidden="true">aria-expanded</span>
			      <span aria-hidden="true">aria-expanded</span>
			      <span aria-hidden="true">aria-expanded</span>
			    </a>
			  </div>

			  <div id="navbarBasicExample" className="navbar-menu">
			    <div className="navbar-start">
							<Link to="/" className="navbar-item">Home</Link>

				      <Link to="/users/students" className="navbar-item">Students</Link>
				      <Link to="/users/instructors" className="navbar-item">Instructors</Link>
				      <Link to="/contact" className="navbar-item">Contact</Link>
				      <Link to="/users/apply" className="navbar-item">Learn</Link>
				      <Link to="/organisations/camps" className="navbar-item">Camps</Link>
				      <Link to="/organisation/documentation" className="navbar-item">Documentation</Link>
				      
				      {
				      	// temporary link to check
				      	<>
				      	<Link to="/users/profile" className="navbar-item">Profile</Link>
				      	<Link to="/users/edit-profile/:id" className="navbar-item">Edit Profile</Link>
				      	</>
				    	}

			      <div className="navbar-item has-dropdown is-hoverable">
			        <a className="navbar-link">
			          More
			        </a>

			        <div className="navbar-dropdown">
				      		<Link to="/state" className="navbar-item">State</Link>
				      		<Link to="/district" className="navbar-item">District</Link>
				      		<Link to="/national" className="navbar-item">National</Link>
				          <a className="navbar-item">
				            Report an issue
				          </a>
			        </div>
			      </div>
			    </div>

			    <div className="navbar-end">
			    	{
							!user.user && user.isAuthInProgress ?
					      <div className="navbar-item">
					        <div className="buttons">
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
					        </div>
					      </div>
			      	:
					    <div className="buttons">
				      	<a
				      		to="/users/login"
				      		className="button is-primary"
				      		onClick={ this.handleLogout }>
				      		Logout
				      	</a>
				      </div>
			    	}
			    </div>
			  </div>
			</nav>
		);
	}
}

function mapStateToProps (state) {
	console.log(state, "hdr map state");
  return { user: state.currentUser };
}

export default withRouter(connect(mapStateToProps)(Header));
