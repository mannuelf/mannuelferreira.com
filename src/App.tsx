import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from "./components/Routes/Routes";
import Home from './pages/Home/Home';
import store from './redux/store';
import ReactGa from 'react-ga';
import {GlobalStyle} from './shared/GlobalStyle';
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";

require('dotenv').config();

ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
ReactGa.pageview(window.location.pathname + window.location.search);

const initialState = {
  name: 'Mannuel Ferreira',
  occupation: 'Software engineer',
  tools: 'JavaScript, TypeScript, React, Vue Js, PHP, python, Sass, SCSS, Docker, Kubernetes, Minikube, Linux, Mac OSX, CENTOS, UBUNTU, AWS, Google Cloud, Heroku, Netlify, Next.js',
  github: 'https://github.com/mannuelf',
  twitter: 'https://twitter.com/manidf',
  linkedin: 'https://www.linkedin.com/in/mannuelferreira/',
  blog: 'http://www.themwebs.me',
  message: 'TypeScript is cool man'
};

const App = (): any => {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Router>
        <AppHeader/>
        <Switch>
          <Route exact to="/" component={Home}/>
          <Route component={Routes}/>
        </Switch>
        <AppFooter/>
      </Router>
    </Provider>
  );
}

export default App;
