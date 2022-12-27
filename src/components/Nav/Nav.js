import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container bg-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-between">
        <h1>
          M.
        </h1>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
