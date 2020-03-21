import { combineReducers } from 'redux';
import posts from './reducers/posts';

const rootReducer: object = combineReducers({
    posts: posts,
});

export default rootReducer;
