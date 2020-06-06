import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./components/Routes/Routes";
import LogRocket from "logrocket";
import Home from "./pages/Home/Home";
import store from "./redux/store";
import ReactGa from "react-ga";
import { GlobalStyle } from "./shared/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";

require("dotenv").config();

ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
ReactGa.pageview(window.location.pathname + window.location.search);

const App = (): any => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <AppHeader />
        <Switch>
          <Route component={Routes} />
        </Switch>
        <AppFooter />
      </Router>
    </Provider>
  );
};

export default App;
