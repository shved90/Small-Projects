import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Router from "./Router";

const Navigation = props => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/cart">Cart</NavLink>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
