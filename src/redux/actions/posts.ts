import {GET_BLOG} from "../actionTypes";
import axios from 'axios';
import {themWebs} from '../../config/ThemWebs';

export const getBlogPosts: any = () => {
  return (dispatch) => {
    return axios.get(`${themWebs.api.posts}`).then(results => {
        dispatch({
          type: "GET_BLOG",
          payload: results.data
        })
      })
  }
};
