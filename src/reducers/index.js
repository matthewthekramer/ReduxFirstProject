
//makes different reducers work together
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});
