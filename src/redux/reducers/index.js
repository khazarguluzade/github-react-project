import { combineReducers } from 'redux';

import search from './search';
import userDetail from './userDetail';

export default combineReducers({
  search,
  userDetail
});
