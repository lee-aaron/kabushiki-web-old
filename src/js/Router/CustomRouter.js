import React, { Component } from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header";
import Error from "../Components/Error";
import FAQ from "../Components/FAQ";
import store from "../Store/store";

class PrivateRoute extends Component {

  render() {
    const { component: Component, ...rest } = this.props;
    let isAuthenticated = store.getState().login.isAuthenticated;
    return (
      <Route
        {...rest}
        render={props => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }
}

PrivateRoute = withRouter(PrivateRoute);

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/faq" component={FAQ} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/*" component={Error} />
      </Switch>
    </Router>
  );
}
