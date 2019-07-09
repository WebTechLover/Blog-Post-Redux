import { combineReducers } from 'redux';
import posts from './postReducer';
import counterReducer from './counterReducer';
export default combineReducers({
    posts: posts,
    counterReducer: counterReducer
});