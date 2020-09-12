import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";

import { Home, ContactPage, Four04, Navbar, Footer } from "./components/base";

import { Main, LoginRegistration, AddReport } from "./components/views";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/register">
          <LoginRegistration />
        </Route>

        <Route exact path="/register">
          <Redirect
            to={{ pathname: "/login", state: { status: "Create Account" } }}
          />
        </Route>

        <Route exact path="/main/:uid">
          <Main />
        </Route>

        <Route exact path="/main">
          <Redirect to={{ pathname: "/register" }} />
        </Route>

        <Route exact path="/addreport">
          <AddReport />
        </Route>

        <Route exact path="/contact">
          <ContactPage />
        </Route>

        <Route>
          <Four04 />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
