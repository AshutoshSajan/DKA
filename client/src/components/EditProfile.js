
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
// import axios from 'axios';


class EditProfile extends Component {

	constructor(props){
    super(props);
    console.log(this.props.user.user,'user');
    this.state = {
      firstName : this.props.user.user ? this.props.user.user.firstName : "",
      lastName: this.props.user.user ? this.props.user.user.lastName : "",
      userName: this.props.user.user ? this.props.user.user.userName : "",
      email: this.props.user.user ? this.props.user.user.email : "",
      dob: this.props.user.user ? this.props.user.user.dob : "",
      phone: this.props.user.user ? this.props.user.user.phone : "",
      photo: this.props.user.user ? this.props.user.user.photo : "",
      belt: this.props.user.user ? this.props.user.user.belt : "",
      rank: this.props.user.user ? this.props.user.user.rank : "",
      showProfile: true,
      loading: false
    }
  }

	handleUpdate = (e) => {
    // e.preventDefault();
    var id = this.props.user.user._id;
    const token = localStorage.getItem("jwt") || "" ;
    if(token){
    	// token were not avilable
	   //  axios.put(`http://localhost:3000/api/v1/users/update/${this.props.user.user._id}`,
	   //  	{
    //       headers: {"Authorization" : token }
    //     }, this.state )
		  // .then((res) => {
		  //   console.log(res, "user updated data....");
		  //   if(res.data.success){
	  	// 		this.setState({ loading: false, message: "Profile updated!"})
	   //      console.log("Profile updated!");
	  	// 	}
		  // })
		  // .catch(function (error) {
		  //   console.log(error, "catch error");
		  // });
		  // console.log(id, "user._id");

		  // fetch method

		  fetch(`http://localhost:3000/api/v1/users/update/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify(this.state)
	    })
	    .then(res => res.json())
	    .then(data => {
    		console.log(data, "updated data");
    		this.props.history.push('/');
	    });
	  }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

 //  printFile = (file) => {
	//   var reader = new FileReader();
	//   reader.onload = function(evt) {
	//     console.log(evt.target.result);
	//   };
	//   reader.readAsText(file);
	// }

  fileHandler = (e) => {
  	// console.log(e.target.files[0]);

  	// var reader = new FileReader();
	  
	  // var b = reader.onload = (e) {
	  //   console.log(e.target.result);
	  // };
	  // var a = reader.readAsText(file);
	  // console.log(b, a, "reader");

  	// this.setState({ photo: a });
  }


	render() {
		console.log(this.props, "EditProfile rndr props");
		return (
			<form
				encType="multipart/form-data"
				className="profile-flex onclick-display-main"
				style={{
						marginTop:"1.2rem",
						boxShadow:" -0.5px -0.5px 0 0 rgba(0,0,0,0.175), 2px 2px 1.2rem 1px rgba(0,0,0,0.175)",
						padding: "1.2rem 40px",
						width: "30vw",
						margin:"1.4rem auto"
					}}
				>
	      { 
	        !this.state.loading ?
	          <div>
	            <h5 style={{
	            		textAlign:"center",
	            		color: "red"
	            	}}
	            	>
	            	{ this.state.message || "" }
	            </h5>
	  					<div className="profile-name">
	  						<input 
	  							type="text"
	  							name="firstName"
	  							placeholder="First name"
	  							value={this.state.firstName}
	  							onChange={ this.handleChange }
	  							style={{
	  								width:"20vw",
	  								fontSize:'1rem',
	  								padding:"0.4 1.2rem",
	  								margin: "1.2rem 0",
	  								borderBottom:'1px solid #666'
	  							}}
	  							/>

	  						<input
	  							type="text"
	  							name="lastName"
	  							placeholder="Last name"
	  							value={this.state.lastName}
	  							onChange={ this.handleChange }
	  							style={{
	  								width:"20vw",
	  								fontSize:'1rem',
	  								padding:"0.4 1.2rem",
	  								margin: "1.2rem 0",
	  								borderBottom:'1px solid #666'
	  							}}
	  							/>
	  					</div>

	  					<input
	  						type="text"
	  						name="userName"
	  						placeholder="Username"
	  						value={this.state.userName}
	  						onChange={ this.handleChange }
	  						style={{
	  							width:"20vw",
	  							fontSize:'1rem',
	  							padding:"0.4 1.2rem",
	  							margin: "1.2rem 0",
	  							borderBottom:'1px solid #666'
	  						}}
	  						/>

	  					<input
	  						readOnly
	  						type="email"
	  						name="email"
	  						placeholder="Email"
	  						value={this.state.email}
	  						onChange={ this.handleChange }
	  						style={{
	  							width:"20vw",
	  							fontSize:'1rem',
	  							padding:"0.4 1.2rem",
	  							margin: "1.2rem 0",
	  							borderBottom:'1px solid #666'
	  						}}
	  						/>
	  					<input
	  						type="number"
	  						name="phone"
	  						placeholder="Phone Number"
	  						onChange={ this.handleChange }
	  						value={this.state.phone} 
	  						style={{
	  							width:"20vw",
	  							fontSize:'1rem',
	  							padding:"0.4 1.2rem",
	  							margin: "1.2rem 0",
	  							borderBottom:'1px solid #666'
	  						}}
	  						/>

	  					<input
	  						name="dob"
	  						type="text"
	  						value={this.state.dob}
	  						placeholder="Date of Birth"
	  						style={{
	  							width:"20vw",
	  							fontSize:'1rem',
	  							padding:"0.4 1.2rem",
	  							margin: "1.2rem 0",
	  							borderBottom:'1px solid #666'
	  						}}
	  						/>

	  					<input
	  						type="text"
	  						name="rank"
	  						placeholder="9th/Kyu"
	  						value={this.state.rank}
	  						onChange={ this.handleChange }
	  						style={{
	  							width:"20vw",
	  							fontSize:'1rem',
	  							padding:"0.4 1.2rem",
	  							margin: "1.2rem 0",
	  							borderBottom:'1px solid #666'
	  						}}
	  						/>

  						<input
	  						type="text"
	  						name="belt"
	  						value={this.state.belt}
	  						placeholder="belt/white"
	  						onChange={ this.handleChange }
	  						style={{
	  							width:"20vw",
	  							fontSize:'1rem',
	  							padding:"0.4 1.2rem",
	  							margin: "1.2rem 0",
	  							borderBottom:'1px solid #666'
	  						}}
  						/>

	  					<input
	  						type="file"
	  						name="photo"
	  						onChange={this.fileHandler}
	  						/>
	  					<a
	  						type="submit"
	  						onClick={this.handleUpdate}
	  						className="button is-danger"
	  						>
	  						Save
	  					</a>
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
