import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="../index.html">
            ATC LogBook
          </a>
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
            <a className="navbar-item" href="admin.html">
              Add Report
            </a>
            <a className="navbar-item" href="admin.html">
              Add Incident
            </a>
            <a className="navbar-item" href="admin.html">
              Reports
            </a>
            <Link className="navbar-item" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
