import {GET_BLOG} from "../actionTypes";
import axios from 'axios';
import {themWebs} from '../../config/ThemWebs';

export const getBlogPosts: any = () => {
  try {
    return async (dispatch) => {
      const results = await axios.get(`${themWebs.api.posts}`);
      dispatch({
        type: "GET_BLOG",
        payload: results.data
      });
    }
  } catch (e) {
    console.log(e);
  }
};
