import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBlogPost} from "../../redux/actions/posts";
import {Link} from "react-router-dom";

const BlogPostItem = () => {
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  console.log(params);

  useEffect(() => {
    dispatch(getBlogPost(1402));
  }, [getBlogPost]);

  let post: object = useSelector(state => state.post.post);

  return (
    <div>
      <h1>Blog post item</h1>
    </div>
  );
};

export default BlogPostItem;
