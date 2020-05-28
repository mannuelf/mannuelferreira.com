import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBlogPost, getBlogPosts} from '../../redux/actions/posts';
import {Link} from 'react-router-dom';

const Post: any = () => {
  const dispatch: any = useDispatch();

  useEffect((): void => {
    dispatch(getBlogPosts());
  }, []);

  const posts: object = useSelector(state => state.posts.posts);
  const blogPosts: object = posts;

  if (!blogPosts) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>Articles</h2>
      {blogPosts.map((post: any): any => {
        return <article key={post.id}>
          <h3>{post.title.rendered}</h3>
          <time>{post.modified}</time>
          <p>{post.excerpt.rendered}</p>
          <Link
            onClick={e => getBlogPost(`${post.id}`)}
            to={`/blog/${post.id}`}
          >Read more</Link>
        </article>
      })}
    </div>
  )
};

export default Post;
