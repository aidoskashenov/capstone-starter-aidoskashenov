import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Registration } from "./components/Registration";
import { Home } from "./components/base";
import { Footer } from "./components/views/Footer";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>

      <Switch>
        <Route exact path="/register">
          <Registration />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
