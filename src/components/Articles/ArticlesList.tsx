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
        <h1 className="article-header text-5xl">Articles</h1>
        {!blogPosts
          ? "Loading..."
          : blogPosts.map((post: any): any => {
              return (
                <article
                  key={post.id}
                  className="articles-list text-left pb-10"
                >
                  <time>{post.modified}</time>
                  <Link
                    onClick={() => getBlogPost(`${post.id}`)}
                    to={`/articles/${post.id}`}
                  >
                    <h2
                      className="text-3xl font-semibold"
                      dangerouslySetInnerHTML={createMarkup(
                        post.title.rendered
                      )}
                    ></h2>
                  </Link>
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      post.excerpt.rendered
                    )}
                  ></p>
                </article>
              );
            })}
      </div>
    </section>
  );
};

export default ArticlesList;
