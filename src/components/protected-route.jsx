import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({
    component: Component,
    authenticated,
    ...rest
}) => (
    <Route
        {...rest}
        render={props =>
            authenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  authenticated: PropTypes.bool
};

ProtectedRoute.defaultProps = {
    component: null,
    authenticated: false
};

export default ProtectedRoute;
