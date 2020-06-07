import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPost, getBlogPosts } from "../../redux/actions/articles";
import { Link } from "react-router-dom";

const ArticlesList: any = () => {
  const dispatch: any = useDispatch();

  useEffect((): void => {
    dispatch(getBlogPosts());
  }, [getBlogPosts]);

  const posts: object = useSelector(state => state.posts.posts);
  const blogPosts: object = posts;

  function createMarkup(markUp) {
    return { __html: markUp };
  }

  if (!blogPosts) return <div>Loading...</div>;

  return (
    <section className="app-row py-10">
      <div className="container mx-auto">
        <h1 className="article-header">Articles</h1>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
        {blogPosts.map((post: any): any => {
          return (
            <article key={post.id} className="articles-list text-left">
              <time>{post.modified}</time>
              <h2
                className="text-4xl font-semibold"
                dangerouslySetInnerHTML={createMarkup(post.title.rendered)}
              ></h2>
              <p
                dangerouslySetInnerHTML={createMarkup(post.excerpt.rendered)}
              ></p>
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
    </section>
  );
};

export default ArticlesList;
