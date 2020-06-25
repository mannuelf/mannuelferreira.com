import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPost } from "../../redux/actions/articles";
import queryString from "query-string";

const Article = (match: any) => {
  console.log("🚀", match);
  //const post: object = useSelector(state => state.posts.post);

  /*useEffect(() => {
    getBlogPost(match.params.id);
  }, []);
   */
  return (
    <div>
      <h2>Blog post item</h2>
    </div>
  );
};

export default Article;
