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

class PrivateRoute extends Component {
  state = {
    loaded: false,
    isAuthenticated: false
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { loaded, isAuthenticated } = this.state;
    if (!loaded) return null;
    return (
      <Route
        {...rest}
        render={props => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
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
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
