import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPost, getBlogPosts } from "../../redux/actions/posts";
import { Link } from "react-router-dom";

const ArticlesList: any = () => {
  const dispatch: any = useDispatch();

  useEffect((): void => {
    dispatch(getBlogPosts());
  }, [getBlogPosts]);

  const posts: object = useSelector(state => state.posts.posts);
  const blogPosts: object = posts;

  if (!blogPosts) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1 className="app-header">Articles</h1>
      {blogPosts.map((post: any): any => {
        return (
          <article key={post.id} className="articles-list">
            <time>{post.modified}</time>
            <h2>{post.title.rendered}</h2>
            <p>{post.excerpt.rendered}</p>

            <Link
              onClick={() => getBlogPost(`${post.id}`)}
              to={`/articles/${post.id}`}
            >
              Read more
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default ArticlesList;
