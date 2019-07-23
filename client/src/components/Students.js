import React, { Component } from 'react';
import axios from 'axios';

class Students extends Component {

  state = {
    students: null
  }
	
	componentDidMount() {
    var token = localStorage.getItem("jwt") || "";
    if(token){
      axios.get('http://localhost:3000/api/v1/users/students',
        {
          headers: {"Authorization" : token }
        })
      .then((res) => {
        console.log(res, "login data");
        if(res.data.success){
          console.log(res.data, "all students");
          this.setState({ students: res.data.users });
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
    const { students } = this.state;
		return (
      <div
        className="container is-fluid"
          style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}
          >
        {
          students ?
            students.map(student => (
            <div
              className="card"
              style={{
                margin: "1.2rem",
                width: "18rem",
                height: "22rem",
                boxShadow: "13px 32px 36px -14px hsla(0, 0%, 70%, 0.3)"
              }}
              key={student._id}
              >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png" 
                    alt={student.username +"'s"+" "+ "image" || "profile image" }
                    />
                </figure>
              </div>
              <div className="card-content">              
                <div className="media-content">
                  <p className="title is-4">
                    { student.firstName +" "+ student.lastName }
                  </p>
                  <p className="subtitle is-6">
                    Kyu: {student.rank || "9th"}
                  </p>
                </div>
                <div className="content">
                  <p>{""}</p>
                  <p>Belt: { student.belt || "white"}</p>
                </div>
              </div>
            </div>
          ))
          : null
        }
      </div>
		);
	}
}

export default Students;