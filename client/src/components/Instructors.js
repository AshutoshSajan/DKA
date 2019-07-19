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
      .catch(function (error) {
        console.log(error, "catch error");
      });
    } else {
      this.props.history.push("/users/login")
    }
	}

	render() {
    const { instructors } = this.state;
		return (
      <div className="container is-fluid" style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        {
          instructors ? instructors.map(instructor => (
            <div class="card" style={{ margin: "1.2rem"}} key={instructor._id}>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt={instructor.username +"'s"+" "+ "image" || "profile image" }/>
                </figure>
              </div>
              <div class="card-content">              
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
                <div class="content">
                  <p></p>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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