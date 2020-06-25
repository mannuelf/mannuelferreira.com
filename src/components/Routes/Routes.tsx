import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ArticlesList from "../Articles/ArticlesList";
import Article from "../Articles/Article";
import Home from "../../pages/Home/Home";

const Routes = () => {
  return (
    <Switch>
      <Router>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/article/:id" exact component={Article} />
        <Route path="/" render={() => <ArticlesList />} />
      </Router>
    </Switch>
  );
};

export default Routes;
