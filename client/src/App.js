import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.scss";
import { LoginRegistration } from "./components/LoginRegistration";
import { Home, ContactPage } from "./components/base";
import { Footer } from "./components/views/Footer";
import { Main, Navbar } from "./components/Main";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={LoginRegistration} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/contact" component={ContactPage} />


      <Footer />
    </Router>
  );
}

export default App;
