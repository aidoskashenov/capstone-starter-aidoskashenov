import React from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import auth from "auth";

export const Navbar = () => {
  const history = useHistory();

  const signOutHandler = () => {
    auth.signOut().then(() => {
      history.push("/register");
    });
  };

  return (
    <nav className="navbar is-primary">
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link
              className="navbar-item has-background-$primary has-text-white"
              to="/"
            >
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
              <Link className="navbar-item" to="/addreport">
                Add Report
              </Link>

              <Link className="navbar-item" to="/main">
                Reports
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact Me
              </Link>
              <Link
                className="navbar-item navbar-end has-background-dark"
                to="/Four04"
                onClick={signOutHandler}
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
