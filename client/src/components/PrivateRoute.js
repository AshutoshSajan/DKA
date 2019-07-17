import React, { Component } from 'react';
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = rest;

  return (
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }}/>
      )
    )}
    />
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
}

export default connect(mapStateToProps)(PrivateRoute);