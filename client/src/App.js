import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';

import SignUp from './components/SignUp';
// import Footer from './components/Footer';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import PrivateRoute from './components/PrivateRoute';


class App extends Component {

	componentDidMount() {
		// fetch('http://localhost/api/v1/me',{
		// 	header: {
		// 		Content: appliation/json,
		// 		Authentication: `Token ${localStorage.getItem(jwt)}`
		// 	}
		// })
		// .then(res => res.json())
		// .then(data => {
		// 	console.log(data)
		// })
	}

  render() {
    return (
      <div className="App">
      	<Header />
        <Router >
          <Switch>
            <Route exact path="/" component = {Home}/>
          	<Route path="/users/login" component = {Login}/>
          	<Route path="/users/register" component = {SignUp}/>
          	<Route path="/users/profile" component = {Profile}/>
          	<Route path="/users/:id" component = {EditProfile}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state){
	console.log(state, "app map state");
	return { state }
}

export default connect(mapStateToProps)(App);
