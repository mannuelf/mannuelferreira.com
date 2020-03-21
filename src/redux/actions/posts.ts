import {GET_BLOG} from "../actionTypes";
import axios from 'axios';
import {themWebs} from '../../config/ThemWebs';

export const getBlogPosts: any = (payload) => {
  return (dispatch) => {
    return axios.get(`https://themwebs.me/wp-json/wp/v2/posts`)
      .then(results => {
        console.log("🕹", results);
        dispatch({
          type: "GET_BLOG",
          payload: results
        })
      })
  }
};

getBlogPosts();
