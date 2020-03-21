import {GET_BLOG} from "../actionTypes";

const initialState: object = {};
let postsReducer: object;

postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;
