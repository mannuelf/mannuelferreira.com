import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {GlobalStyle} from './shared/GlobalStyle';
import store from './redux/store';
import ReactGa from 'react-ga';

import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import BlogPosts from "./components/BlogPosts/BlogPosts";

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

class App extends Component<any> {
  constructor(props) { // :TODO refactor to redux
    super(props);
    this.state = {
      details: {}
    };
  }

  componentWillMount(): void {
    this.setState({
      details: initialState,
    })
  }

  render() {
    return (
      <Provider store={store}>
        <AppHeader/>
        <Router>
          <GlobalStyle/>
          <section className="grid">
            <div className="grid-item">
              <div className="inner">
                <Switch>
                  <Route exact to="/" render={(props) => <Home details={this.state.details}/>}/>
                  <Route exact to="blog" component={Blog}/>
                </Switch>
                <BlogPosts/>
                <AppFooter/>
              </div>
            </div>
          </section>
        </Router>
      </Provider>
    );
  }
}

export default App;
