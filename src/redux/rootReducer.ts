import { combineReducers } from 'redux';
import posts from './reducers/posts';

let rootReducer: object;

rootReducer = combineReducers({
  posts
});

export default rootReducer;
