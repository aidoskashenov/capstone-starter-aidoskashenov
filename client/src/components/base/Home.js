import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "api";

export const Home = () => {
  const [user, setUser] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements[0].value
    const password = event.target.elements[1].value
    const res = {}
    res.email = email;
    res.password = password
    const user = await api.loginUser(res)
    setUser(user)

  };

  return (

      <section className="hero is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="login">
            <img src="https://logoipsum.com/logo/logo-10.svg" width="325px" />
            <form onSubmit={handleSubmit}>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium "
                    type="email"
                    placeholder="hello@example.com"
                    autoComplete="username"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium "
                    type="password"
                    placeholder="**********"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>
              <br />
              <button
                className="button is-block is-fullwidth is-primary is-medium "
                type="submit"
              >
                Login
              </button>
            </form>
            <br></br>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <Link to="/register">Create an Account</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

  );
};
