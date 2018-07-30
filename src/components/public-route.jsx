import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({
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

PublicRoute.propTypes = {
  component: PropTypes.func,
  authenticated: PropTypes.bool
};

PublicRoute.defaultProps = {
  component: null,
  authenticated: false
};

export default PublicRoute;
