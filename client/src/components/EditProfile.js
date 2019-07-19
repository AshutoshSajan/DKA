import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';


class EditProfile extends Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	componentDidMount() {
		// TODO: handle edit profile
		console.log(this.props,"cdm EditProfile");
	}

	handleUpdate = async(e) => {
   //  e.preventDefault();
   //  const { jwt } = localStorage;
   //  // setAuthToken(jwt)

   //  axios.put(`http://localhost:3000/api/v1/users/update/${this.props.user._id}`, this.state)
	  // .then((res) => {
	  //   console.log(res, "data");
	  //   if(res.data.success){
  	// 		this.setState({ loading: false, message: "Profile updated!"})
   //      console.log("Profile updated!");
  	// 	}
	  // })
	  // .catch(function (error) {
	  //   console.log(error, "catch error");
	  // });
  }


	render() {
		console.log(this.props, "EditProfile rndr props");
		return (
			<form style={{ marginTop:"20px", boxShadow:" -0.5px -0.5px 0 0 rgba(0,0,0,0.175), 2px 2px 10px 1px rgba(0,0,0,0.175)", padding: "20px 40px", width: "30vw", margin:"0 auto" }} className="profile-flex onclick-display-main" onSubmit={this.handleSubmit}>
	      { 
	        !this.state.loading ?
	          <div>
	            <h5 style={{textAlign: "center", color: "red"}}>{ this.state.message || "" }</h5>
	  					<div className="profile-name">
	  						<input style={{width:"20vw", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="text" placeholder="First name" onChange={ this.handleChange } value={this.state.firstName} name="firstName" />
	  						<input style={{width:"20vw", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="text" placeholder="Last name" name="lastName" onChange={ this.handleChange } value={this.state.lastName} />
	  					</div>
	  					<input style={{width:"20vw", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="text" placeholder="Username" name="username" onChange={ this.handleChange } value={this.state.username}/>
	  					<input style={{width:"20vw", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="email" placeholder="Email" name="email" onChange={ this.handleChange } value={this.state.email} readOnly />
	  					<input style={{width:"20vw", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="number" placeholder="Phone Number" name="phoneNumber" onChange={ this.handleChange } value={this.state.phoneNumber} />
	  					<input style={{width:"20vw", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="date" placeholder="Date of Birth" name="dob" onChange={ this.handleChange } value={this.state.dob} />	
	  					<button type="submit" className="button is-danger" onClick={this.handleUpdate}>Save</button>
	          </div>
	        : null 
	      }
			</form>
		);
	}
}


function mapStateToProps(state) {
	console.log(state, "EditProfile map state");
  return { user: state.currentUser };
}

export default withRouter(connect(mapStateToProps)(EditProfile));
