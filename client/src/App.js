import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import { LoginRegistration } from "./components/LoginRegistration";
import { Home, ContactPage, Four04 } from "./components/base";
import { Footer } from "./components/views/Footer";
import { Main, Navbar, AddReport } from "./components/Main";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/register" component={LoginRegistration} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/contact" component={ContactPage} /> */}
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

        <Route exact path="/contact">
          <ContactPage />
        </Route>

        <Route exact path="/addreport">
          <AddReport />
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
