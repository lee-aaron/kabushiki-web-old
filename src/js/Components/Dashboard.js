import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../../css/Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Sidebar />
        <div className="dashboard_main">
          <h1>Dashboard</h1>
          <div>Add information on stocks</div>
        </div>
      </div>
    );
  }
}
