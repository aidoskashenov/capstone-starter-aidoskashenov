import React from "react";

import { Link } from "react-router-dom";

export const Home = () => {
  // const handleAdd =  (event) => {
  //   // console.log(event, "ddunmiy   ");
  //   event.preventDefault();
  //   setImage(secure_url)
  // };

  return (
    <>
      <div className="hero hero--home is-fullheight has-text-centered">
        <div className="hero-body hero-body--home">
          <div className="container">
            <div className="flex flex--align-center flex--column">
              <img
                src="https://logoipsum.com/logo/logo-10.svg"
                width="325px"
                alt="Logo"
                className="image"
              />
              <h1 className="title">Air Traffic Control Logbook</h1>
              <Link className="button is-primary my-2" to="/register">
                Get Started
              </Link>
              <Link className="button is-small my-2" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>


      <section className="px-4 py-4">
        <div className="container">
          <h2 className="title"></h2>
          <p>

          </p>
        </div>
      </section>
    </>
  );
};
