import React, {Component} from 'react';
import ReactGa from 'react-ga';
import './App.css';

ReactGa.initialize('UA-19677147-3');
ReactGa.pageview(window.location.pathname + window.location.search);

const initialState = {
  name: 'Mannuel Ferreira',
  occupation: 'software engineer',
  tools: 'JavaScript, TypeScript, React, Vue Js, PHP, python, Sass, SCSS, Docker, Kubernetes, Minikube, Linux, Mac OSX, CENTOS, UBUNTU, AWS, Google Cloud, Heroku, Netlify, Next.js',
  github: 'https://github.com/mannuelf',
  twitter: 'https://twitter.com/manidf',
  linkedin: 'https://www.linkedin.com/in/mannuelferreira/',
  blog: 'http://www.themwebs.me',
  message: 'TypeScript is cool man'
};

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {
  readonly state: State = initialState;

  render() {
    return (
      <div className="App">
        <div className="main">
          <article>
            <h1>Hello world!</h1>
            <h2>My name is {this.state.name}</h2>
            <p>I'm a {this.state.occupation}, currently working as lecturer teaching Front End development at <a
              href="https://www.noroff.no/" target="_blank" rel="noopener noreferrer">Noroff Fagskole</a> in Norway.
              Previously I worked for <a href="https://superbalist.com" target="_blank"
                                         rel="noopener noreferrer">Superbalist.com</a>.</p>
            <p>I write on a blog here <a href={this.state.blog} target="_blank"
                                         rel="noopener noreferrer">www.themwebs.me</a></p>
            <p>
              I enjoy building and designing applications for the web. I enjoy working with web technologies such as
              {this.state.tools}.
              I enjoy learning and teaching web development and engineering concepts. I enjoy sports'ing football and
              squash.
            </p>
            <p>I recently launched a site called <a href="https://www.whatcoinwhichcoin.com" target="_blank"
                                                    rel="noopener noreferrer">WHATcoin WHICHcoin</a>.
              It's a work in progress, you can view the latest bitcoin and etherium price there.</p>
          </article>
          <footer>
            <h3>Follow me</h3>
            <p>on <a href={this.state.github} target="_blank" rel="noopener noreferrer">Github</a></p>
            <p>
              on <a href={this.state.twitter} target="_blank" rel="noopener noreferrer">twitter</a> if you like.
            </p>
            <p>on <a href={this.state.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a> if that's your
              thing.</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
