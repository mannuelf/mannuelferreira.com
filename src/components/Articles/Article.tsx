import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPost } from "../../redux/actions/posts";

const PostItem = () => {
  const post: object = useSelector(state => state.post.post);
  const blogPost: object = post;

  return (
    <div>
      <h2>Blog post item</h2>
      {blogPost}
    </div>
  );
};

export default PostItem;
