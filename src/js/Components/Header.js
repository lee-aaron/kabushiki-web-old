import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import { LOGOUT } from "../../actions/types";
import store from "../Store/store";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    store.subscribe(() => {
      this.setState({
        isLoggedIn: store.getState().login.isAuthenticated
      })
    });
  }

  render() {
    let name = "Kabushiki Web";
    let login = "Login";
    return (
      <nav className="navbar navbar-expand bg-light">
        <Link className="navbar-brand" to="/">
          <div>{name}</div>
        </Link>
        {this.state.isLoggedIn ? (
          <Link className="navbar-brand" onClick={() => {
            store.dispatch({
              type: LOGOUT
            });
          }} to="/">
            <div>Logout</div>
          </Link>
        ) : (
          <Link className="navbar-brand" to="/login">
            <div>{login}</div>
          </Link>
        )}
        <Link className="navbar-brand" to="/dashboard">
          <div>Dashboard</div>
        </Link>
        <Link className="navbar-brand" to="/faq">
          <div>FAQ</div>
        </Link>
      </nav>
    );
  }
}
