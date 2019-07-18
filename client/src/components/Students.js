import React, { Component } from 'react';

class Students extends Component {
	
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
          // this.props.dispatch({ type: "USER_LOGIN_SUCCESS", data: res.data });
          // this.props.history.push('/');
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
		return (
			<div>
				all students
			</div>
		);
	}
}

export default Students;
