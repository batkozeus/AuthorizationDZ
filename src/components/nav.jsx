import React, { Fragment } from "react";
import { compose } from "redux";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const styles = {
  list: {
    display: "flex",
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  link: {
    display: "block",
    margin: "15px 5px",
    padding: "8px 32px",
    fontWeight: "bold",
    fontSize: 20,
    textDecoration: "none",
    color: "black",
    borderRadius: 9,
    border: "1px solid black"
  },
  activeLink: {
    backgroundColor: "dodgerblue",
    color: "white"
  }
};

const LoginLinks = () => (
  <Fragment>
    <li>
        <NavLink
            exact to="/login"
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Login
        </NavLink>
    </li>
  </Fragment>
);

const PublicLinks = () => (
    <Fragment>
        <li>
            <NavLink
                exact to="/"
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Home
            </NavLink>
        </li>
    </Fragment>
);

const PrivateLinks = () => (
<Fragment>
    <li>
        <NavLink
            exact
            to="/profile"
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Profile
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/dashboard"
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Dashboard
        </NavLink>
    </li>
</Fragment>
);

const Nav = ({ authenticated }) => (
  <ul style={styles.list}>
    {!authenticated && <LoginLinks />}
    <PublicLinks />
    {authenticated && <PrivateLinks />}
  </ul>
);

Nav.propTypes = {
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
    )
)(Nav);
