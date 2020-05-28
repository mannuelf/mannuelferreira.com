import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBlogPost} from "../../redux/actions/posts";

const PostItem = () => {
  const post: object = useSelector(state => state.post.post);
  const blogPost: object = post;

  return (
    <div>
      <h1>Blog post item</h1>
      {blogPost}
    </div>
  );
};

export default PostItem;
