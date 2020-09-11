import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, exact }) => {
  const loggedIn = useSelector( state => { return state.session.isAuthenticated})
  
  return <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/tweets" />
    )
  )} />
}

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

export const AuthRoute = withRouter(Auth)

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
