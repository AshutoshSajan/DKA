import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './Home';
import Login from '/login';
import Header from './header';
import SignUp from '/SignUp';
import Profile form '/.Profile';
import PrivateRoute from './PrivateRoute';

import './App.scss';

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
        <Switch>
        	<Route exact path="/" component = {Home}/>
        	<Route exact path="/users/login" component = {Login}/>
        	<Route exact path="/users/register" component = {SignUp}/>
        	<Route exact path="/users/profile" component = {Profile}/>
        	{
        		// <Route exact path="/users/:id" component = {EditProfile}/>
        	}
        	<PrivateRoute />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps = (state) => {
	console.log(state, "app map state");
	return { state }
}
export default connect(mapStateToProps)(App);
