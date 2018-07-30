import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { signUserIn } from '../../redux/actions/session';

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    border: "1px solid grey"
  },
  label: {
    width: 320,
    padding: 4,
    fontSize: 18
  },
  input: {
    width: 320,
    marginBottom: 16,
    padding: 4,
    fontSize: 18
  },
  button: {
    margin: "0 4px",
    padding: "8px 32px",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: 9,
    border: "none",
    backgroundColor: "dodgerblue",
    color: "white",
    outline: "none"
  }
};

const INITIAL_STATE = { login: '', password: '' };

class LoginPage extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;

    if (login === '' || password === '') return;

    this.props.signUserIn({ ...this.state });
    this.resetState();
  };

  resetState = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleInputChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { login, password } = this.state;

    return (
      <div style={styles.page}>
        <form onSubmit={this.onSubmit} style={styles.form}>
          <label
            htmlFor="text"
            style={styles.label}
          >
            Email:
          </label>
          <input
            type="text"
            name="login"
            style={styles.input}
            placeholder="Email"
            value={login}
            onChange={this.handleInputChange}
          />
          <label
            htmlFor="password"
            style={styles.label}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            style={styles.input}
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button
            style={styles.button}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  signUserIn: PropTypes.func
};

LoginPage.defaultProps = {
  signUserIn: undefined
};

const mapDispatchToProps = { signUserIn };

export default connect(null, mapDispatchToProps)(LoginPage);
