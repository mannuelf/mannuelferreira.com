import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ArticlesList from "../Articles/ArticlesList";
import Home from "../../pages/Home/Home";

const Routes = () => {
  return (
    <section className="container mx-auto">
      <Switch>
        <Router>
          <section className="grid">
            <div className="grid-item">
              <div className="inner">
                <Home />
              </div>
            </div>
          </section>
        </Router>
      </Switch>
    </section>
  );
};

export default Routes;
