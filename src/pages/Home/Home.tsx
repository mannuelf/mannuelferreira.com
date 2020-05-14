import React from 'react';
import GooglePhotos from "../../components/GooglePhotos/GooglePhotos";
import BlogPosts from "../../components/BlogPosts/BlogPosts";

const Home: any = (props) => {
  console.log(props);
  return (
    <div>
      <article>
        <GooglePhotos />
        <h2>my name is {props.details.name}</h2>
        <p>I'm a {props.details.occupation}, working as lecturer teaching Front End development at <a href="https://www.noroff.no/" target="_blank" rel="noopener noreferrer">Noroff Fagskole</a> in Norway. Previously I worked for <a href="https://superbalist.com" target="_blank" rel="noopener noreferrer">Superbalist.com</a>.</p>
        <p>I write on a blog here <a href={props.details.blog} target="_blank" rel="noopener noreferrer">www.themwebs.me</a></p>
        <p>I enjoy building and designing applications for the web. I enjoy working with web technologies such as {props.details.tools}.  I enjoy learning and teaching web development and engineering concepts. I enjoy sports'ing football and  squash.</p>
        <p>I recently launched a site called <a href="https://www.whatcoinwhichcoin.com" target="_blank" rel="noopener noreferrer">WHATcoin WHICHcoin</a>. It's a work in progress, you can view the latest bitcoin and etherium price there.</p>
        <BlogPosts />
      </article>
    </div>

  )
};

export default Home;
