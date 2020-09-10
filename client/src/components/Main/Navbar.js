import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item brand-text" to="/home">
            ATC LogBook
          </Link>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/register">
              Create Account
            </Link>
            <a className="navbar-item" href="admin.html">
              Add Report
            </a>
            <a className="navbar-item" href="admin.html">
              Add Incident
            </a>
            <Link className="navbar-item" to="/main">
              Reports
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
