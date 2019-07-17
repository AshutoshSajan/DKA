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

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// };

function mapStateToProps(state) {
  console.log(state);
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
}

export default connect(mapStateToProps)(PrivateRoute);