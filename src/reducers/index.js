import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
  form: formReducer
});
