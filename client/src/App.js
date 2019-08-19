import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const axios = require('axios');
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Headers from './components/Headers';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Students from './components/Students';
import Register from './components/Register';
import CampForm from './components/CampForm';
import IssueForm from './components/IssueForm';
import AdminDash from './components/AdminDash';
import Instructors from './components/Instructors';
import EditProfile from './components/EditProfile';
import PrivateRoute from './components/PrivateRoute';

import Users from './containers/Users';
import Admin from './containers/Admin';

class App extends Component {
  constructor(props) {
    super(props);
    var network = navigator.onLine;
    var netType = navigator.connection.effectiveType;
    this.state = {
      network,
      netType
    };
  }
  componentDidMount() {
    var token = localStorage.getItem('jwt') || '';
    if (token) {
      axios
        .get('http://localhost:3000/api/v1/users/me', {
          headers: { Authorization: token }
        })
        .then(res => {
          console.log(res, 'aap auto login data');
          if (res.data.success) {
            console.log(res.data, '/me response');
            this.props.dispatch({ type: 'USER_LOGIN_SUCCESS', data: res.data });
            this.props.history.push('/');
          }
        })
        .catch(function(error) {
          console.log(error, 'catch error');
        });
    } else {
      this.props.history.push('/users/login');
    }
  }

  render() {
    const { network, netType } = this.state;
    console.log(network, netType, this.props, 'app rndr');

    if (!network) {
      return (
        <div>
          <h2>No internet connetion </h2>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Headers />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users/login" component={Login} />
            <Route path="/users/apply" component={Register} />
            <Route path="/users/register" component={SignUp} />
            <Route path="/users/profile" component={Profile} />
            <Route path="/users/students" component={Students} />
            <Route path="/organisation/contact" component={Contact} />
            <Route path="/users/admin" component={AdminDash} />
            <Route path="/organisations/camps" component={CampForm} />
            <Route path="/organisations/issues" component={IssueForm} />
            <Route path="/users/instructors" component={Instructors} />
            <Route path="/users/edit-profile/:id" component={EditProfile} />
            <Route render={() => <h1>404 page not found</h1>} />
          </Switch>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log(state, 'app map state');
  return { state };
}

export default withRouter(connect(mapStateToProps)(App));
