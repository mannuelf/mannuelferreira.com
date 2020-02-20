import React from 'react';
import ReactGa from 'react-ga';
import './App.css';
ReactGa.initialize('UA-19677147-3');
ReactGa.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <div className="main">
        <article>
          <h1>Hello world!</h1>
          <h2>My name is Mannuel Ferreira</h2>
          <p>I'm a software engineer, currently working as lecturer teaching Front End development at <a href="https://www.noroff.no/" target="_blank">Noroff Fagskole</a> in Norway.
            Previously I worked for <a href="https://superbalist.com" target="_blank">Superbalist.com</a>.</p>
          <p>I write on a blog here <a href="http://www.themwebs.me">www.themwebs.me</a></p>
          <p>
            I enjoy building and designing applications for the web. I enjoy working with web technologies such as
            JavaScript, PHP, python, Sass.
            I enjoy learning and teaching web development and engineering concepts. I enjoy sports'ing football and
            squash.
          </p> <p>
          I recently launched a site called <a href="https://www.whatcoinwhichcoin.com">WHATcoin WHICHcoin</a>.
          It's a work in progress, you can view the latest bitcoin and etherium price there.
        </p></article>
        <footer><h3>Follow me</h3> <p>on <a href="https://github.com/mannuelf">Github</a></p> <p>on <a
          href="https://twitter.com/manidf">twitter</a> if you like.</p> <p>on <a
          href="https://www.linkedin.com/in/mannuelferreira/">linkedin</a> if that's your thing.</p></footer>
      </div>
    </div>
  );
}

export default App;
