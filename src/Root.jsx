import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Root.css";
import Home from "./Home";
import Test from "./Test";

export default function Root() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">test</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}
