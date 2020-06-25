import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPost, getBlogPosts } from "../../redux/actions/articles";
import { Link } from "react-router-dom";
import * as moment from "moment";

const ArticlesList: any = () => {
  const dispatch: any = useDispatch();

  useEffect((): void => {
    dispatch(getBlogPosts());
  }, [getBlogPosts]);

  const posts: object = useSelector(state => state.posts.posts);
  const blogPosts: object = posts;

  const createMarkup: any = markUp => {
    return { __html: markUp };
  };

  if (!blogPosts) return <div>Loading...</div>;

  return (
    <section className="app-row p-10">
      <div className="container mx-auto">
        <h1 className="article-header text-5xl">Articles</h1>
        <div className="flex flex-wrap -mb-4 pt-10">
          {!blogPosts
            ? "Loading..."
            : blogPosts.map((post: any): any => {
                return (
                  <article
                    key={post.id}
                    className="articles-list text-left pb-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 mb-4 px-4"
                  >
                    <time>
                      {moment(post.modified).format("ddd, MMM Do YYYY")}
                    </time>
                    <Link
                      onClick={() => getBlogPost(`${post.id}`)}
                      to={`/articles/${post.id}`}
                    >
                      <h2
                        className="text-3xl font-semibold leading-7 pb-5"
                        dangerouslySetInnerHTML={createMarkup(
                          post.title.rendered
                        )}
                      ></h2>
                    </Link>
                    <div
                      className="break-words"
                      dangerouslySetInnerHTML={createMarkup(
                        post.excerpt.rendered
                      )}
                    ></div>
                  </article>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default ArticlesList;
