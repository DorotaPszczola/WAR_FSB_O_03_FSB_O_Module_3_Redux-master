import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom"
import Counter from "../apps/Counter";
import ShoppingList from "../apps/ShoppingList";
import Hello from "../components/Hello";
import NotFound from "../components/NotFound";

const Main = () => (
  <div>
    <Router>
      {/* <Hello /> */}
      <Switch>
      <Route exact path="/" component={Hello} />

        <Route path="/counter" component={Counter} />
        <Route path="/list" component={ShoppingList} />
        <Route component={NotFound} />
        <Route path="/articles" />
      </Switch>

    </Router>
  </div>
);

export default Main;
