import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const links = this.props.dogs.map((dog) => (
      <li className="nav-item" key={dog.name}>
        <NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      </li>
    ));
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand my-auto" to="/dogs">
            Navbar
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 my-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/dogs">
                  Home
                </NavLink>
              </li>
              {links}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
