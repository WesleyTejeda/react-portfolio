import React from 'react';
import { HashRouter as Router, Route, Switch}  from "react-router-dom";
import NavTab from "./components/NavTab";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <NavTab />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
