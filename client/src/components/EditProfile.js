import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';


class EditProfile extends Component {

	constructor(props){
    super(props);
    console.log(this.props.user.user,'user');
    this.state = {
      showProfile: true,
      firstName : this.props.user.user ? this.props.user.user.firstName : "",
      lastName: this.props.user.user ? this.props.user.user.lastName : "",
      username: this.props.user.user ? this.props.user.user.userName : "",
      email: this.props.user.user ? this.props.user.user.email : "",
      dob: this.props.user.user ? this.props.user.user.dob : "",
      phoneNumber: this.props.user.user ? this.props.user.user.mobile : "",
      photo: this.props.user.user ? this.props.user.user.photo : "",
      loading: false
    }
  }

	handleUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt") || "" ;
    if(token){
	    axios.put(`http://localhost:3000/api/v1/users/update/${this.props.user.user._id}`,
	    	{
          headers: {"Authorization" : token }
        }, this.state )
		  .then((res) => {
		    console.log(res, "user updated data....");
		    if(res.data.success){
	  			this.setState({ loading: false, message: "Profile updated!"})
	        console.log("Profile updated!");
	  		}
		  })
		  .catch(function (error) {
		    console.log(error, "catch error");
		  });
		}
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  fileHandler = (e) => {
  	console.log(e.target.files[0]);
  	this.setState({photo:  e.target.files[0] });
  }


	render() {
		console.log(this.props, "EditProfile rndr props");
		return (
			<form style={{ marginTop:"1.2rem", boxShadow:" -0.5px -0.5px 0 0 rgba(0,0,0,0.175), 2px 2px 1.2rem 1px rgba(0,0,0,0.175)", padding: "1.2rem 40px", width: "30vw", margin:"1.4rem auto" }} className="profile-flex onclick-display-main" encType="multipart/form-data">
	      { 
	        !this.state.loading ?
	          <div>
	            <h5 style={{textAlign: "center", color: "red"}}>{ this.state.message || "" }</h5>
	  					<div className="profile-name">
	  						<input style={{width:"20vw", fontSize:'1rem', padding:"0.4 1.2rem", margin: "1.2rem 0", borderBottom:'1px solid #666'}} type="text" placeholder="First name" onChange={ this.handleChange } value={this.state.firstName} name="firstName" />
	  						<input style={{width:"20vw", fontSize:'1rem', padding:"0.4 1.2rem", margin: "1.2rem 0", borderBottom:'1px solid #666'}} type="text" placeholder="Last name" name="lastName" onChange={ this.handleChange } value={this.state.lastName} />
	  					</div>
	  					<input style={{width:"20vw", fontSize:'1rem', padding:"0.4 1.2rem", margin: "1.2rem 0", borderBottom:'1px solid #666'}} type="text" placeholder="Username" name="username" onChange={ this.handleChange } value={this.state.userName}/>
	  					<input style={{width:"20vw", fontSize:'1rem', padding:"0.4 1.2rem", margin: "1.2rem 0", borderBottom:'1px solid #666'}} type="email" placeholder="Email" name="email" onChange={ this.handleChange } value={this.state.email} readOnly />
	  					<input style={{width:"20vw", fontSize:'1rem', padding:"0.4 1.2rem", margin: "1.2rem 0", borderBottom:'1px solid #666'}} type="number" placeholder="Phone Number" name="phoneNumber" onChange={ this.handleChange } value={this.state.phoneNumber} />
	  					<input style={{width:"20vw", fontSize:'1rem', padding:"0.4 1.2rem", margin: "1.2rem 0", borderBottom:'1px solid #666'}} type="date" placeholder="Date of Birth" name="dob" onChange={ this.handleChange } value={this.state.dob} />
	  					<input type="file" name="photo" onChange={this.fileHandler}/>
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
