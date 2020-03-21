import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBlogPosts} from '../../redux/actions/posts';

const BlogPosts: any = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, []);

  const posts: object = useSelector(state => state.posts.posts);
  const blogPosts: object = posts;
  if (!blogPosts) return <div>Loading...</div>;

  return (
    <div>
      <h2>Writing</h2>
      {blogPosts.map((post): any => {
        return <article key={post.id}>
          <h3>{post.title.rendered}</h3>
          <time>{post.modified}</time>
          <p>{post.excerpt.rendered}</p>
        </article>
      })}
    </div>
  )
};

export default BlogPosts;
