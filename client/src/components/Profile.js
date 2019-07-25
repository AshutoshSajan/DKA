import React, { Component } from 'react';
import { connect } from 'react-redux';


import EditProfile from "./EditProfile";

class Profile extends Component { 
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
      phone: this.props.user.user ? this.props.user.user.phone : "",
      photo: this.props.user.user ? this.props.user.user.photo : "",
      loading: false
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleProfile = (e) => {
    if(e.target.innerText === "Edit Profile"){ 
     this.setState({ showProfile: false })
  	} else if(e.target.innerText === "Show Profile"){
      this.setState({ showProfile: true })
    }
  }

	render(){
    console.log(this.props,"profile rndr");
		return( 
      <div
        style={{
          width: "30vw", margin:"20px auto"
        }}>
        <div
          className="button-box"
          style={{
            display:"flex",
            justifyContent:"center",
            zIndex:'50'
          }}
          >
          <button
            style={{margin: "0 5px"}}
            className="button is-danger"
            onClick={this.handleProfile}
            >
            Show Profile
          </button>
          <button
            style={{margin: "0 5px"}}
            className="button is-danger"
            onClick={this.handleProfile}
            >
            Edit Profile
          </button>
        </div>
        {     
          this.state.showProfile ? 
            <div
              style={{ 
                display:"grid",
                placeItems:"center",
                marginBottom:'4.5rem'
              }}
              >
              <div
                style={{
                  width:"30vw",
                  margin:"1.4rem auto",
                  padding:'2.5rem',
                  boxShadow:"-0.5px -0.5px 0 0 rgba(0,0,0,0.175),2px 2px 10px 1px rgba(0,0,0,0.175)"
                }}
                >
                <figure
                  style={{ textAlign:'center' }}
                  >
                  <h5
                    style={{
                      fontSize:'1.8rem',
                      textTransform:'capitalize'
                    }}
                    className="userInfo"
                    >
                    {
                      this.state.username ?
                      this.state.username.toUpperCase()
                      : ""
                    }
                  </h5>
                  
                  { 
                    this.state.photo ? 
                      <div
                        style={{
                          height:"12.5rem",
                          display:'inline-block',
                          width: "12.5rem",
                          borderRadius:'50%',
                          margin:"1.2rem auto"
                        }}
                        >
                        <img
                          alt="Profile photo"
                          style={{
                            height:"100%",
                            width:"100%",
                            borderRadius:'50%'
                          }}
                          src={ this.props.user.user.photo || null }
                        />
                      </div>
                    :
                      <div
                        style={{
                          height:
                          "12.5rem",
                          width:"12.5rem",
                          borderRadius:'50%',
                          background: "#00d1b2",
                          display:"grid",
                          placeItems:"center",
                          margin: "1.2rem auto"
                        }}
                        >
                        <span
                          style={{
                            fontSize:'3rem',
                            color:"#fff",
                            fontWeight:'bold'
                          }}
                          >
                          {
                            this.state.username ?
                            this.state.username.slice(0,1).toUpperCase()
                            : ""
                          }
                        </span>
                      </div>
                  }
                  
                </figure>
                <h5
                  className="userInfo"
                  style={{
                    fontSize:'1.5rem',
                    textTransform:'uppercase',
                    padding:"0.5rem 0"
                  }}
                  >
                  First Name :
                </h5>
                <h3>{this.state.firstName || "Not Available"}</h3>
                <h5
                  className="userInfo"
                  style={{
                    fontSize:'1.5rem',
                    textTransform:'uppercase',
                    padding: "0.5rem 0"
                  }}
                  >
                  Last Name :
                </h5>
                <h3>{this.state.lastName || "Not Available"}</h3>
                <h5
                  className="userInfo"
                  style={{
                    fontSize:'1.5rem',
                    textTransform:'uppercase',
                    padding: "0.5rem 0"
                  }}
                  >
                  Name :
                </h5>
                <h3>{this.state.username || "Not Available"}</h3>
                <h5
                  style={{
                    fontSize:'1.5rem',
                    textTransform:'uppercase',
                    padding: "0.5rem 0"
                  }}
                  className="userInfo"
                  >
                  Email :
                </h5>
                <h3>{this.state.email || "Not Available"}</h3>
                <h5
                  style={{
                    fontSize:'1.5rem',
                    textTransform:'uppercase',
                    padding:"0.5rem 0"
                  }}
                  className="userInfo"
                  >
                  Phone Number :
                </h5>
                <h3>{this.state.phoneNumber || "Not Available"}</h3>
                <h5
                  className="userInfo"
                  style={{
                    fontSize:'1.5rem',
                    textTransform:'uppercase',
                    padding:"0.5rem 0"
                  }}
                  >
                  DOB :
                </h5>
                <h3>{this.state.dob || "Not Available"}</h3>
              </div>
            </div>
          : 
  				<EditProfile />
        }
  		</div> 
    )
	}
}

function mapStateToProps(state) {
  console.log(state, "profile map state");
	return {
		user: state.currentUser,
	}
}

export default connect(mapStateToProps)(Profile);