import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar is-primary">
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link className="navbar-item has-background-$primary has-text-white" to="/">
              ATC LogBook
            </Link>
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
              <Link className="navbar-item navbar-end has-background-dark" to="/contact">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
