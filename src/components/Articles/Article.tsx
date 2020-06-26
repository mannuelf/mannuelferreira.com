import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogPost } from "../../redux/actions/articles";

const Article = ({ match }) => {
  const dispatch = useDispatch();
  const blogPostId = match.params.id;

  useEffect(() => {
    dispatch(getBlogPost(blogPostId));
  }, [dispatch, blogPostId]);

  const post = useSelector(state => state.posts.post);

  console.log(typeof post, post);

  const createMarkup: any = markUp => {
    return { __html: markUp };
  };

  return !post ? (
    "Loading..."
  ) : (
    <Fragment>
      <section className="app-row pt-10 pb-10 pr-5 pl-5">
        <div className="container mx-auto">
          <h1 className="article-header text-5xl">Articles</h1>

          <article className="text-left pt-10">
            <h2 className="text-3xl">{post.title.rendered}</h2>
            <div
              className="break-words"
              dangerouslySetInnerHTML={createMarkup(post.content.rendered)}
            ></div>
          </article>
        </div>
      </section>
    </Fragment>
  );
};

export default Article;
