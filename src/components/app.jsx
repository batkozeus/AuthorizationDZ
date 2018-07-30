import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "./app-bar";
import ProtectedRoute from "./protected-route";
import PublicRoute from "./public-route";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import DashboardPage from "./pages/dashboard";

const styles = {
  app: {
    maxWidth: 1170,
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

const App = ({ authenticated }) => (
  <div style={styles.app}>
    <AppBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <PublicRoute
        exact
        path="/login"
        component={LoginPage}
        authenticated={!authenticated}
      />
      <ProtectedRoute
        exact
        path="/profile"
        component={ProfilePage}
        authenticated={authenticated}
      />
      <ProtectedRoute
        exact
        path="/dashboard"
        component={DashboardPage}
        authenticated={authenticated}
      />
      <Redirect to="/" />
    </Switch>
  </div>
);

App.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapState = state => ({
  authenticated: state.session.authenticated
});

export default compose(
  withRouter,
  connect(
    mapState,
    null
  ),
)(App);
