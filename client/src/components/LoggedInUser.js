import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

class LoggedInUser extends Component {

	render() {
		const user = this.props.user || null;
		console.log(this.props, user, "LoggedInUser");
		return (
			<div>
				{
					user.user ?
						<Link
							to="/users/profile"
							style={{ display:'flex', justifyContent: "flex-end", padding:'10px 20px'}}
							>
							<div
								style={{cursor: 'pointer', zIndex:'100'}}
								>
		            <div
		            	style={{ display: "grid", placeItems: 'center', marginRight: '20px'}}
		            	>
			              { 
			                user.user && user.user.photo ? 
			                  <img
			                  	src={ user.photo }
			                  	alt='profile-image'
			                  	style={{width:"40px", height: '40px', borderRadius:'50%'}}
			                  	/> 
			                :
			                <div
			                	style={{height: "40px", width: "40px", borderRadius:'50%', background: "green", display:"grid", placeItems:"center"}}
			                	>
			                  <span
			                  	style={{color:"#fff"}}
			                  	>
			                  	{user.user ? user.user.userName.slice(0,1).toUpperCase() : "" }
			                  </span>
			                </div>
			              }
								  <p
								  	className="user-info"
								  	style={{textTransform:'capitalize'}}
								  	>
								  	{user.user ? user.user.userName : ""}
								  </p>
		            </div> 
			      	</div>
		      	</Link>
		      : null
		    }
		  </div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
  return {  user: state.currentUser  };
}

export default connect(mapStateToProps)(LoggedInUser);