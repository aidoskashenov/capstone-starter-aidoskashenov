import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReportList } from "./ReportList";
import { Navbar } from "../base/Navbar";
import { AddReport } from "./AddReport";

export const Main = () => {
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <section className="hero is-fullwidth">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">Hello, Admin.</h1>
                  <h2 className="subtitle">
                    I hope you are having a great day!
                  </h2>
                </div>
              </div>
            </section>
            <section className="info-tiles">
              <div className="tile is-ancestor has-text-centered">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">439k</p>
                    <p className="subtitle">Users</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">59k</p>
                    <p className="subtitle">Products</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">3.4k</p>
                    <p className="subtitle">Open Orders</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">19</p>
                    <p className="subtitle">Exceptions</p>
                  </article>
                </div>
              </div>
            </section>
            <div className="columns">
              <div className="column is-6">
                <div className="card events-card">
                  <header className="card-header">
                    <p className="card-header-title">Events</p>
                    <a
                      href="#"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div>
                    <ReportList />
                  </div>
                  <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                      View All
                    </a>
                  </footer>
                </div>
              </div>
              <div className="column is-6">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Search Report</p>
                    <a
                      href="#"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder=""
                        />
                        <span className="icon is-medium is-left">
                          <i className="fa fa-search"></i>
                        </span>
                        <span className="icon is-medium is-right">
                          <i className="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Search Incident</p>
                    <a
                      href="#"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder=""
                        />
                        <span className="icon is-medium is-left">
                          <i className="fa fa-search"></i>
                        </span>
                        <span className="icon is-medium is-right">
                          <i className="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar } from "../base/Navbar";
export { AddReport } from "./AddReport";
