import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import LoggedInUser from './LoggedInUser';

class Headers extends Component {
	componentDidMount() {
		// M.Sidenav.init(this.sidenav);
		var elem = document.querySelector('.sidenav');
		var instance = M.Sidenav.init(elem, {
			edge: 'left',
			fullWidth: true,
			inDuration: 250
		});
	}

	render() {
		const { user } = this.props || null;
		console.log(user, 'user heders...');
		return (
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper">
						<a href="#!" className="brand-logo">
							<img
								src="/dka.jpeg"
								alt="website logo"
								width="80"
								height="80"
								style={{ marginLeft: '160%', borderRadius: '50%' }}
							/>
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

						{
							// 	<a href="#!" className="brand-logo">
							// 	Logo
							// </a>
						}

						<ul className="right hide-on-med-and-down">
							<li>
								<NavLink to="/" className="navbar-item">
									Home
								</NavLink>
							</li>

							<li>
								<NavLink to="/organisation/about" className="navbar-item">
									About
								</NavLink>
							</li>

							<li>
								<NavLink to="/organisation/contact" className="navbar-item">
									Contact
								</NavLink>
							</li>

							<li>
								<NavLink to="/users/login" className="waves-effect waves-light btn">
									Login
								</NavLink>
							</li>

							<NavLink to="/users/register" className="waves-effect waves-light btn blue lighten-1">
								Sign-Up
							</NavLink>

							<li>
								<NavLink to="/users/students" className="navbar-item">
									Students
								</NavLink>
							</li>
							<li>
								<NavLink to="/users/instructors" className="navbar-item">
									Instructors
								</NavLink>
							</li>
							<li>
								<NavLink to="/organisation/contact" className="navbar-item">
									Contact
								</NavLink>
							</li>
							<li>
								<NavLink to="/users/apply" className="navbar-item">
									Join acedemy
								</NavLink>
							</li>
							<li>
								<NavLink to="/organisations/camps" className="navbar-item">
									Camps
								</NavLink>
							</li>
							<li>
								<NavLink to="/users/admin" className="navbar-item">
									Dashboard
								</NavLink>
							</li>
							<li>
								<NavLink to="/organisation/documentation" className="navbar-item">
									Documentation
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>

				<ul className="sidenav black" id="mobile-demo">
					<li className="sidenav-hero-sec">
						<img
							className="logo"
							src={user.user && user.user.photo ? user.user.photo : '/karate.svg'}
							alt="logo"
							width="80"
							height="80"
							style={{
								borderRadius: '50%',
								marginLeft: '2rem'
							}}
						/>
						<div>
							<h3 className="white-text flow-text">{user.user ? user.user.userName : ''}</h3>
							<h3 className="white-text flow-text">{user.user ? user.user.email : ''}</h3>
						</div>
					</li>
					<li>
						<NavLink to="/" className="nav-item green-text text-accent-3">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/users/students" className="nav-item green-text text-accent-3">
							Students
						</NavLink>
					</li>
					<li>
						<NavLink to="/users/instructors" className="nav-item green-text text-accent-3">
							Instructors
						</NavLink>
					</li>
					<li>
						<NavLink to="/organisation/contact" className="nav-item green-text text-accent-3">
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to="/users/apply" className="nav-item green-text text-accent-3">
							Join acedemy
						</NavLink>
					</li>
					<li>
						<NavLink to="/organisations/camps" className="nav-item green-text text-accent-3">
							Camps
						</NavLink>
					</li>
					<li>
						<NavLink to="/users/admin" className="nav-item green-text text-accent-3">
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to="/organisation/documentation" className="nav-item green-text text-accent-3">
							Documentation
						</NavLink>
					</li>
					<li>
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
			// 					<NavLink
			// 						to="/"
			// 						className="navbar-item"
			// 						>
			// 						Home
			// 					</NavLink>
			// 				</li>
			// 				<li>
			// 		      <NavLink
			// 		      	to="/users/students"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Students
			// 		      </NavLink>
			// 		    </li>
			// 		    <li>
			// 		      <NavLink
			// 		      	to="/users/instructors"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Instructors
			// 		      </NavLink>
			// 		    </li>
			// 	      <li>
			// 		      <NavLink
			// 		      	to="/organisation/contact"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Contact
			// 		      </NavLink>
			// 		    </li>
			// 		    <li>
			// 		      <NavLink
			// 		      	to="/users/apply"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Join acedemy
			// 		      </NavLink>
			// 		    </li>
			// 		    <li>
			// 		      <NavLink
			// 		      	to="/organisations/camps"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Camps
			// 		      </NavLink>
			// 		    </li>
			// 		    <li>
			// 		      <NavLink
			// 		      	to="/users/admin"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Dashboard
			// 		      </NavLink>
			// 		    </li>
			// 		    <li>
			// 		      <NavLink
			// 		      	to="/organisation/documentation"
			// 		      	className="navbar-item"
			// 		      	>
			// 		      	Documentation
			// 		      </NavLink>
			// 		    </li>

			// 				<li className="hoverable-dropdown">
			// 					<ul>
			// 						<li>
			// 							More
			// 							<NavLink
			// 		      			to="/state"
			// 		      			className="navbar-item"
			// 		      			>
			// 		      			State
			// 		      		</NavLink>
			// 		      	</li>
			// 		      	<li>
			// 		      		<NavLink
			// 		      			to="/district"
			// 		      			className="navbar-item"
			// 		      			>
			// 		      			District
			// 		      		</NavLink>
			// 		      	</li>
			// 		      	<li>
			// 			      	<NavLink
			// 		      			to="/national"
			// 		      			className="navbar-item"
			// 		      			>
			// 		      			National
			// 			      	</NavLink>
			// 			      </li>
			// 			      <li>
			// 		      		<NavLink
			// 		      			to="/organisations/issues"
			// 		      			className="navbar-item"
			// 		      			>
			// 		      			Report an issue
			// 		      		</NavLink>
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
			// 	          <NavLink
			// 							to="/users/register"
			// 			      	className="button is-primary">
			// 			      	Sign-Up
			// 			      </NavLink>
			// 	          <NavLink
			// 		      		to="/users/login"
			// 		      		className="button is-primary">
			// 		      		Login
			// 		      	</NavLink>
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
