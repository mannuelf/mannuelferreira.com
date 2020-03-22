import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReactGa from 'react-ga';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import './css/App.css';
require('dotenv').config();

ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
ReactGa.pageview(window.location.pathname + window.location.search);

// :TODO refactor to redux, this is the make it work version
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
        <Router>
          <div className="App">
            <div className="main">
              <header><h1>Hi</h1></header>
              <Switch>
                <Route exact to="/" render={(props) => <Home details={this.state.details} />} />
                <Route exact to="blog" component={Blog} />
              </Switch>
              <footer>
                <h3>Follow me</h3>
                <p><a href={this.state.details.github} target="_blank" rel="noopener noreferrer">Github</a></p>
                <p><a href={this.state.details.twitter} target="_blank" rel="noopener noreferrer">twitter</a> if you like.</p>
                <p><a href={this.state.details.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a> if that's your thing.</p>
              </footer>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
