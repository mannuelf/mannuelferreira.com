import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import LogRocket from "logrocket";
import store from "./redux/store";
import ReactGa from "react-ga";
import { GlobalStyle } from "./shared/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Article from "./components/Articles/Article";
import ArticlesList from "./components/Articles/ArticlesList";
import NotFound from "./components/NotFound/NotFound";

require("dotenv").config();
LogRocket.init(`${process.env.REACT_APP_LOG_ROCKET_ID}/mannueferreiracom`);
ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
ReactGa.pageview(window.location.pathname + window.location.search);

const App = (): any => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppHeader />
      <Switch>
        <Route path="/article/:id" component={Article}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/about" component={About}></Route>
        <Route
          path="/"
          render={() => (
            <Fragment>
              <Home />
              <ArticlesList />
            </Fragment>
          )}
        ></Route>
        <Redirect to="/not-found"></Redirect>
      </Switch>
      <AppFooter />
    </Provider>
  );
};

export default App;
