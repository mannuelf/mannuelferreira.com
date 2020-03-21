import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getBlogPosts} from '../../redux/actions/posts';

const BlogPosts: any = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, []);

  const posts: object = useSelector(state => state.posts);
  if (!posts) return <div>No blog posts today</div>;

  return (
    <div>
      <h2>Blog posts</h2>
    </div>
  )
};

export default BlogPosts;
