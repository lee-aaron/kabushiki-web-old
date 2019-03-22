import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/loginAction";
import store from "../Store/store";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      isAuthenticated: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.user, this.state.pass);
    this.setState({
      isAuthenticated: store.getState().login.isAuthenticated
    });
  }

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <h1>Login!</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username:</label>
            <br />
            <input
              type="text"
              name="user"
              onChange={this.onChange}
              value={this.state.user}
              autoComplete="off"
            />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <br />
            <input
              type="text"
              name="pass"
              onChange={this.onChange}
              value={this.state.pass}
              autoComplete="off"
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  login: state.login
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
