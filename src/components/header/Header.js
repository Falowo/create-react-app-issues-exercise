import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="nabar-brand" to="/">
              Github create-react-app issues list
            </NavLink>
          </div>
        </nav>
      </header>
    );
  }
}
