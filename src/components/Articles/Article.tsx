import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPost } from "../../redux/actions/posts";

const PostItem = ({ getBlogPost, posts: { post, loading }, match }) => {
  const post: object = useSelector(state => state.posts.post);

  useEffect(() => {
    getBlogPost(match.params.id);
  }, []);

  return (
    <div>
      <h2>Blog post item</h2>
      {post}
    </div>
  );
};

export default PostItem;
