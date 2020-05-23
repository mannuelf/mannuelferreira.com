import {
  GET_BLOG_POSTS,
  GET_BLOG_POST
} from "../actionTypes";

const initialState: object = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

let postsReducer: object;

postsReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case GET_BLOG_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_BLOG_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      }
    default:
      return state;
  }
};

export default postsReducer;
