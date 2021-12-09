import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Root.css";
import Home from "./Home";
import HoofdContainer from "./HoofdContainer";

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
              <HoofdContainer />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}
