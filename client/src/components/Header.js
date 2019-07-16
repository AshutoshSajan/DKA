import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import LoggedInUser from "./LoggedInUser";

class Header extends Component {

	handleLogout = (e) => {
		window.localStorage.clear();
		this.props.history.push("/login");
	};

	render() {
		console.log(this.props, "headre props");
		const { user } = this.props || null;

		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <Link to="/" className="navbar-brand">
			  	<img className="logo" src="/dka.jpeg" alt="logo" />
			  </Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			    
			      <li className="nav-item">
				      <Link to="/" className="nav-link">About</Link>
			      </li>
			      <li className="nav-item">
				      <Link to="/" className="nav-link">Students</Link>
				    </li>
			    </ul>
			    {
			    	user && user.isAuthInProgress ?
						    <form className="form-inline my-2 my-lg-0">
						      <Link 
						      	to="/users/login"
						      	className="hdr-btn btn btn-outline-success my-2 my-sm-0"
						      	type="submit">
						      	Login
						      </Link>
						      <Link
						      	to="/users/register"
						      	className="hdr-btn btn btn-outline-success my-2 my-sm-0"
						      	type="submit">
						      	Sign-Up
						      </Link>
						    </form>
						  : 
							<>
								<LoggedInUser/>
							  <button 
							  	className="hdr-btn btn" 
							  	onClick={ this.handleLogout }>
							  		Logout
							  </button>
						  </>
					}
			  </div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
  return { state };
}

export default withRouter(connect(mapStateToProps)(Header));
