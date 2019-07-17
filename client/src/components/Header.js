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
			<header className="header">
				<Router>
					<nav className="navbar bg-light">
							<Link to="/" className="navbar-brand">
				    		<div className="logo-container">
							  	<img className="logo" src="/dka.jpeg" alt="logo" />
							  </div>
						  </Link>

						  <div>
						  	{
						  		/* toggle menu 
									<button class="label" onClick={this.handleToggle}>
										<img src="./dka.jpeg" />
										<i class="fas fa-bars"></i>
									</button>*/
								}

						    <ul className={`nav-ul about-sec ${ this.state.toggleClass ? "show" : "hide" }`}>
						      <li className="nav-item">
							      <Link to="/about" className="nav-link">About</Link>
						      </li>
						      <li className="nav-item">
							      <Link to="/students" className="nav-link">Students</Link>
							    </li>
							    <li className="nav-item">
							      <Link to="/instructors" className="nav-link">Instructors</Link>
							    </li>
							    <li className="nav-item">
							      <Link to="/contact" className="nav-link">Contact</Link>
							    </li>
							    <li className="nav-item">
							      <Link to="/learn" className="nav-link">Learn</Link>
							    </li>
							    <li className="nav-item">
							      <Link to="/camps" className="nav-link">Camps</Link>
							    </li>

							    <li className="nav-item tournaments-list">
							    	<span className="">Tournaments</span>
							    	<ul className="tournaments">
							    	 	<li>
							      		<Link to="/state" className="nav-link">State</Link>
							      	</li>
							      	<li>
							      		<Link to="/district" className="nav-link">District</Link>
							      	</li>
							      	<li>
							      		<Link to="/national" className="nav-link">National</Link>
							      	</li>
							      </ul>
							    </li>
						    </ul>
						  </div>

					    <div >
						    {
						    	// change isAuthInProgress to false after fetching api
						    	!user.user && user.isAuthInProgress ?
									    <ul className="nav-ul login-sec">
									      <li>
									      	<Link 
									      		to="/users/login"
									      		className="hdr-btn btn btn-outline-success my-2 my-sm-0"
									      		type="submit">
									      		Login
									      	</Link>
									      </li>
									      <li>
										      <Link
										      	to="/users/register"
										      	className="hdr-btn btn btn-outline-success my-2 my-sm-0"
										      	type="submit">
										      	Sign-Up
										      </Link>
										    </li>
									    </ul>
									  : 
										<div>
											<LoggedInUser/>
										  <button 
										  	className="hdr-btn btn" 
										  	onClick={ this.handleLogout }>
										  		Logout
										  </button>
									  </div>
								}
							</div>
					</nav>
				</Router>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, "hdr map state");
  return { user: state.currentUser };
}

export default connect(mapStateToProps)(Header);
