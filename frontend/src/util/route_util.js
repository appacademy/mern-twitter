import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, exact }) => {
  const loggedIn = useSelector((state) => state.session.isAuthenticated);

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/tweets" />
      }
    />
  );
};

const Protected = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.session.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const AuthRoute = withRouter(Auth);

export const ProtectedRoute = withRouter(Protected);
