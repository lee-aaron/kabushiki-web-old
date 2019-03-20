import React, { Component } from "react";
import "./App.css";
import Router from "./js/Router/CustomRouter";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
