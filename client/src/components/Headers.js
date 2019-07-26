import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import LoggedInUser from './LoggedInUser';

class Headers extends Component {

	render() {
		const { user } = this.props || null;

		return (
			<nav className="navbar">

				<div className="navbar-start">
					<div>
						<img
				  		className="logo"
				  		src="/dka.jpeg"
				  		width="80"
				  		alt="logo"
				  		height="80"
				  		/>
					</div>

					<div>
						<ul className="navbar-item">
							<li>
								<Link
									to="/"
									className="navbar-item"
									>
									Home
								</Link>
							</li>
							<li>
					      <Link
					      	to="/users/students"
					      	className="navbar-item"
					      	>
					      	Students
					      </Link>
					    </li>
					    <li>
					      <Link
					      	to="/users/instructors"
					      	className="navbar-item"
					      	>
					      	Instructors
					      </Link>
					    </li>
				      <li>
					      <Link
					      	to="/organisation/contact"
					      	className="navbar-item"
					      	>
					      	Contact
					      </Link>
					    </li>
					    <li>
					      <Link
					      	to="/users/apply"
					      	className="navbar-item"
					      	>
					      	Join acedemy
					      </Link>
					    </li>
					    <li>
					      <Link
					      	to="/organisations/camps"
					      	className="navbar-item"
					      	>
					      	Camps
					      </Link>
					    </li>
					    <li>
					      <Link
					      	to="/users/admin"
					      	className="navbar-item"
					      	>
					      	Dashboard
					      </Link>
					    </li>
					    <li>
					      <Link
					      	to="/organisation/documentation"
					      	className="navbar-item"
					      	>
					      	Documentation
					      </Link>
					    </li>
					    
							<li className="hoverable-dropdown">
								<ul>
									<li>
										More
										<Link
					      			to="/state" 
					      			className="navbar-item"
					      			>
					      			State
					      		</Link>
					      	</li>
					      	<li>
					      		<Link
					      			to="/district" 
					      			className="navbar-item"
					      			>
					      			District
					      		</Link>
					      	</li>
					      	<li>
						      	<Link
					      			to="/national" 
					      			className="navbar-item"
					      			>
					      			National
						      	</Link>
						      </li>
						      <li>
					      		<Link
					      			to="/organisations/issues" 
					      			className="navbar-item"
					      			>
					      			Report an issue
					      		</Link>
									</li>
								</ul>
							</li>
						</ul>
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
				    	<LoggedInUser />
			      	<a
			      		style={{
			      			color: "#fff"
			      		}}
			      		to="/users/login"
			      		className="button is-primary"
			      		onClick={ this.handleLogout }
			      		>
			      		Logout
			      	</a>
			      </div>
		    	}
			  </div>
			</nav>
		);
	}
}

function mapStateToProps (state) {
	console.log(state, "hdr map state");
  return { user: state.currentUser };
}

export default withRouter(connect(mapStateToProps)(Headers));
