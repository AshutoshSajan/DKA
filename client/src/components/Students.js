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
      <div style={{display: 'flex', flexWrap:'wrap'}}>
        {
          students ? students.map(student => (
            <div className="columns">
              <div className="column" />
              <div className="column">
                <div className="card profile-card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src={student.photo || '/dka.jpeg'}
                        alt={student.username +"'s"+" "+ "image" || "profile image" }
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>{student.username || "Anonymous"}</h4>
                      <p> {student.rank || ""}</p>
                      <p> {student.belt || ""}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column" />
            </div>
          )) : null
        }
      </div>
		);
	}
}

export default Students;