import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getBlogPosts} from '../../redux/actions/posts';

const BlogPosts: any = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, []);

  return (
    <div>
      <h2>Blog posts</h2>
    </div>
  )
};

export default BlogPosts;
