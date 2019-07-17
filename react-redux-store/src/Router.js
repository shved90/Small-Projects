import React from "react";
import { Switch, Route } from "react-router-dom";
import homepage from './pages/homepage'
import cartpage from './pages/cartpage'

const Router = () => (
  <Switch>
    <Route exact path="/" component={homepage} />
    <Route exact path="/cart" component={cartpage} />
  </Switch>
);

export default Router
