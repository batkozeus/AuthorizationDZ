import React, { Fragment } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { signUserOut } from '../redux/actions/session';

const styles = {
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  button: {
    display: "block",
    margin: "15px 5px",
    padding: "8px 16px",
    fontWeight: "bold",
    fontSize: 20,
    textDecoration: "none",
    color: "black",
    border: "10px double black",
    backgroundColor: "white"
  },
  image_wrapper: {
    backgroundColor: "cadetblue",
    borderRadius: 42
  },
  image: {
    margin: 15,
    width: 45
  },
  name: {
    margin: "15px 5px",
    fontSize: 36,
    fontWight: "bold"
  }
};

const PrivateActions = ({ user, signUserOut: signOut, history }) => (
  <Fragment>
    <li>
      <button
        style={styles.button}
        type="button"
        onClick={async () => {
          await signOut();
          history.push("/");
        }}
      >
        Logout
      </button>
    </li>
    <li style={styles.image_wrapper}>
      <img style={styles.image} src={user.avatar} alt="User face" />
    </li>
    <li>
      <div style={styles.name}>{user.name}</div>
    </li>
  </Fragment>
);

const AuthManager = ({ authenticated, ...props }) => (
  <ul style={styles.list}>
    {authenticated && (
      <PrivateActions {...props} />
    )}
  </ul>
);

PrivateActions.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  signUserOut: PropTypes.func,
  history: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.func
    ])
  )
};

PrivateActions.defaultProps = {
  user: {},
  signUserOut: () => {},
  history: null
};

AuthManager.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapState = state => ({
  authenticated: state.session.authenticated,
  user: state.session.user
});

const mapDispatch = { signUserOut };

export default compose(
  withRouter,
  connect(
    mapState,
    mapDispatch,
  ),
)(AuthManager);
