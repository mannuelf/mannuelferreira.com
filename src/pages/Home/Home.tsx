import React from 'react';
import HomePanel from '../../redux/reducers/home';

const Home: any = () => {
  return (
    <section>
      <div className="container">
        <h1>my name is {HomePanel.name}</h1>
        <p>I'm a {HomePanel.occupation}. I teach Front End development at <a href="https://www.noroff.no/"
                                                                             target="_blank" rel="noopener noreferrer">Noroff
          Fagskole</a> in Norway.
          Previously I worked for <a href="https://superbalist.com" target="_blank"
                                     rel="noopener noreferrer">Superbalist.com</a>.</p>
        <p>I write on a blog here <a href={HomePanel.blog} target="_blank" rel="noopener noreferrer">www.themwebs.me</a>
        </p>
        <p>I enjoy building and designing applications for the web. I enjoy working with web technologies such
          as {HomePanel.tools}. I enjoy learning and teaching web development and engineering concepts. I enjoy
          sports'ing football and squash.</p>
        <p>I recently launched a site called <a href="https://www.whatcoinwhichcoin.com" target="_blank"
                                                rel="noopener noreferrer">WHATcoin WHICHcoin</a>. It's a work in
          progress, you can view the latest bitcoin and etherium price there.</p>
      </div>
    </section>
  )
};

export default Home;
