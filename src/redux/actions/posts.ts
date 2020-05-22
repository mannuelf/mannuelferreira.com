import {GET_BLOG} from "../actionTypes";
import axios from 'axios';
import {themWebs} from '../../config/ThemWebs';

export const getBlogPosts: any = () => {
  try {
    return async (dispatch) => {
      const {posts} = themWebs.api;
      const results = await axios.get(`${posts}`);
      dispatch({
        type: "GET_BLOG",
        payload: results.data
      });
    }
  } catch (e) {
    console.log(e);
    throw new Error('kablam!')
  }
};
