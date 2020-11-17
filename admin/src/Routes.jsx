import { Route, Switch } from "react-router-dom";
import React from "react";

import Dispatch from './pages/dispatch-page';
import Order from './pages/order-page';

const Routes = () => (
  <Switch>
    <Route exact path="/" >
      <Order />
    </Route>
    {/* <Route path="/order" component={Order} /> */}
  </Switch>
);

export default Routes;
