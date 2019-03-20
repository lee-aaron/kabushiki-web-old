import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

export default class Header extends Component {
  render() {
    let name = "Kabushiki Web";
    return (
      <nav className="navbar navbar-expand bg-light">
        <Link className="navbar-brand" to="/">
          <div>{name}</div>
        </Link>
      </nav>
    );
  }
}
