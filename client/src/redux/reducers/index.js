import { combineReducers } from 'redux';
import auth from './auth';
import todo from './todo';
import pagination from './pagination';

export default combineReducers({
  auth,
  todo,
  pagination
});
