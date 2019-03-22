import React, { Component } from "react";
import Router from "./js/Router/CustomRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./js/Store/store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    );
  }
}

export default App;
