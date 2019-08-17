import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import LoggedInUser from './LoggedInUser';

class Headers extends Component {
	componentDidMount() {
		// M.Sidenav.init(this.sidenav);
		var elem = document.querySelector('.sidenav');
		var instance = M.Sidenav.init(elem, {
			edge: 'left',
			inDuration: 250
		});
	}

	render() {
		const { user } = this.props || null;

		return (
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper">
						<a href="#!" className="brand-logo">
							Logo
						</a>

						<ul id="dropdown1" className="dropdown-content">
							<li>
								<a href="#!">one</a>
							</li>
							<li>
								<a href="#!">two</a>
							</li>
							<li className="divider"></li>
							<li>
								<a href="#!">three</a>
							</li>
						</ul>

						<a href="#" data-target="mobile-demo" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to="/" className="navbar-item">
									Home
								</Link>
							</li>

							<li>
								<Link to="/organisation/about" className="navbar-item">
									About
								</Link>
							</li>

							<li>
								<Link to="/organisation/contact" className="navbar-item">
									Contact
								</Link>
							</li>

							<li>
								<Link to="/users/login" className="waves-effect waves-light btn">
									Login
								</Link>
							</li>

							<Link to="/users/register" className="waves-effect waves-light btn blue lighten-1">
								Sign-Up
							</Link>

							{/*
							<li>
								<Link to="/users/students" className="navbar-item">
									Students
								</Link>
							</li>
							<li>
								<Link to="/users/instructors" className="navbar-item">
									Instructors
								</Link>
							</li>
							<li>
								<Link to="/organisation/contact" className="navbar-item">
									Contact
								</Link>
							</li>
							<li>
								<Link to="/users/apply" className="navbar-item">
									Join acedemy
								</Link>
							</li>
							<li>
								<Link to="/organisations/camps" className="navbar-item">
									Camps
								</Link>
							</li>
							<li>
								<Link to="/users/admin" className="navbar-item">
									Dashboard
								</Link>
							</li>
							<li>
								<Link to="/organisation/documentation" className="navbar-item">
									Documentation
								</Link>
							</li>
							*/}
						</ul>
					</div>
				</nav>

				<ul className="sidenav black" id="mobile-demo">
					<li className="sidenav-hero-sec">
						<img className="logo" src="/dka.jpeg" alt="logo" width="80" height="80" />
						<a
							style={{
								color: '#fff'
							}}
							href="/users/login"
							className="btn"
							onClick={this.handleLogout}
						>
							Logout
						</a>
					</li>
					<li>
						<Link to="/" className="nav-item">
							Home
						</Link>
					</li>
					<li>
						<Link to="/users/students" className="nav-item">
							Students
						</Link>
					</li>
					<li>
						<Link to="/users/instructors" className="nav-item">
							Instructors
						</Link>
					</li>
					<li>
						<Link to="/organisation/contact" className="nav-item">
							Contact
						</Link>
					</li>
					<li>
						<Link to="/users/apply" className="nav-item">
							Join acedemy
						</Link>
					</li>
					<li>
						<Link to="/organisations/camps" className="nav-item">
							Camps
						</Link>
					</li>
					<li>
						<Link to="/users/admin" className="nav-item">
							Dashboard
						</Link>
					</li>
					<li>
						<Link to="/organisation/documentation" className="nav-item">
							Documentation
						</Link>
					</li>
				</ul>
			</div>

			// <nav className="navbar">

			// 	<div className="navbar-start">
			// 		<div>
			// 			<img
			// 	  		className="logo"
			// 	  		src="/dka.jpeg"
			// 	  		width="80"
			// 	  		alt="logo"
			// 	  		height="80"
			// 	  		/>
			// 		</div>

			// 		<div>
			// 			<ul className="navbar-item">
			// 				<li>
			// 					<Link
			// 						to="/"
			// 						className="navbar-item"
			// 						>
			// 						Home
			// 					</Link>
			// 				</li>
			// 				<li>
			// 		      <Link
			// 		      	to="/users/students"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Students
			// 		      </Link>
			// 		    </li>
			// 		    <li>
			// 		      <Link
			// 		      	to="/users/instructors"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Instructors
			// 		      </Link>
			// 		    </li>
			// 	      <li>
			// 		      <Link
			// 		      	to="/organisation/contact"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Contact
			// 		      </Link>
			// 		    </li>
			// 		    <li>
			// 		      <Link
			// 		      	to="/users/apply"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Join acedemy
			// 		      </Link>
			// 		    </li>
			// 		    <li>
			// 		      <Link
			// 		      	to="/organisations/camps"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Camps
			// 		      </Link>
			// 		    </li>
			// 		    <li>
			// 		      <Link
			// 		      	to="/users/admin"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Dashboard
			// 		      </Link>
			// 		    </li>
			// 		    <li>
			// 		      <Link
			// 		      	to="/organisation/documentation"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Documentation
			// 		      </Link>
			// 		    </li>

			// 				<li className="hoverable-dropdown">
			// 					<ul>
			// 						<li>
			// 							More
			// 							<Link
			// 		      			to="/state"
			// 		      			className="navbar-item"
			// 		      			>
			// 		      			State
			// 		      		</Link>
			// 		      	</li>
			// 		      	<li>
			// 		      		<Link
			// 		      			to="/district"
			// 		      			className="navbar-item"
			// 		      			>
			// 		      			District
			// 		      		</Link>
			// 		      	</li>
			// 		      	<li>
			// 			      	<Link
			// 		      			to="/national"
			// 		      			className="navbar-item"
			// 		      			>
			// 		      			National
			// 			      	</Link>
			// 			      </li>
			// 			      <li>
			// 		      		<Link
			// 		      			to="/organisations/issues"
			// 		      			className="navbar-item"
			// 		      			>
			// 		      			Report an issue
			// 		      		</Link>
			// 						</li>
			// 					</ul>
			// 				</li>
			// 			</ul>
			// 		</div>
			// 	</div>

			// 	<div className="navbar-end">
			//    	{
			// 			!user.user && user.isAuthInProgress ?
			// 	      <div className="navbar-item">
			// 	        <div className="buttons">
			// 	          <Link
			// 							to="/users/register"
			// 			      	className="button is-primary">
			// 			      	Sign-Up
			// 			      </Link>
			// 	          <Link
			// 		      		to="/users/login"
			// 		      		className="button is-primary">
			// 		      		Login
			// 		      	</Link>
			// 	        </div>
			// 	      </div>
			//      	:
			// 	    <div className="buttons">
			// 	    	<LoggedInUser />
			//       	<a
			//       		style={{
			//       			color: "#fff"
			//       		}}
			//       		to="/users/login"
			//       		className="button is-primary"
			//       		onClick={ this.handleLogout }
			//       		>
			//       		Logout
			//       	</a>
			//       </div>
			//    	}
			//   </div>
			// </nav>
		);
	}
}

function mapStateToProps(state) {
	console.log(state, 'hdr map state');
	return { user: state.currentUser };
}

export default withRouter(connect(mapStateToProps)(Headers));
