import React, { Component } from 'react';
import axios from 'axios';

class Instructors extends Component {

  state = {
    instructors: null
  }
	
	componentDidMount() {
    var token = localStorage.getItem("jwt") || "";
    if(token){
      axios.get('http://localhost:3000/api/v1/users/instructors',
        {
          headers: {"Authorization" : token }
        })
      .then((res) => {
        console.log(res, "login data");
        if(res.data.success){
          console.log(res.data, "all instructors");
          this.setState({ instructors: res.data.users });
        }
      })
      .catch(function (err) {
        console.log(err, "catch error");
      });
    } else {
      this.props.history.push("/users/login")
    }
	}

	render() {
    const { instructors } = this.state;
		return (
      <div
        className="container is-fluid"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly'
        }}
        >
        {
          instructors ?
            instructors.map(instructor => (
              <div
                className="card"
                style={{
                  margin: "1.2rem",
                  width: "22rem",
                  height: "30rem",
                  boxShadow: "13px 32px 36px -14px hsla(0, 0%, 70%, 0.3)"
                }}
                key={instructor._id}>
                <div
                  className="card-image">
                  <figure
                    className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt={instructor.username +"'s"+" "+ "image" || "profile image" }
                      />
                  </figure>
                </div>
                <div className="card-content">              
                  <div className="media-content">
                    <p className="title is-5">
                      { instructor.userName }
                    </p>
                    <p className="subtitle is-6">
                      Email: { instructor.email }
                    </p>
                    <p className="subtitle is-6">
                      Contact: { instructor.phone }
                    </p>
                  </div>
                  <div className="content">
                    <p>Kyu: { instructor.kyu || "" }</p>
                    <p>Belt: { instructor.belt || "" }</p>
                  </div>
                </div>
              </div>
            )):
          <p>No instructors found</p>
        }
      </div>
		);
	}
}

export default Instructors;