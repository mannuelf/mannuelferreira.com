import {
  GET_BLOG_POSTS,
  GET_BLOG_POST
} from "../actionTypes";
import {THEMWEBS } from '../../config/themwebs';
import axios from 'axios';

export const getBlogPosts: any = () => {
  try {
    return async (dispatch) => {
      const {posts} = THEMWEBS.api;
      const results = await axios.get(`${posts}`);
      dispatch({
        type: "GET_BLOG_POSTS",
        payload: results.data
      });
    }
  } catch (e) {
    console.log(e.message);
    throw new Error('kablam!');
  }
};

export const getBlogPost: any = id => async dispatch => {
  console.log("🟢 getting:", id);
  try {
    const {posts} = THEMWEBS.api;
    const post = await axios.get(`${posts}/${id}`);
    dispatch({
      type: 'GET_BLOG_POST',
      payload: post.data
    });
  } catch (e) {
    console.log(e.message);
    throw new Error('kablam!');
  }
}
