import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ArticlesList from "../Articles/ArticlesList";
import Home from "../../pages/Home/Home";

const Routes = () => {
  return (
    <Switch>
      <Router>
        <Home />
        <ArticlesList />
      </Router>
    </Switch>
  );
};

export default Routes;
