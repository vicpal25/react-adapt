import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';
import athleteReducer from 'reducers/athlete';
import chartReducer from 'reducers/charts';
import activityReducer from 'reducers/activites';
import preferencesReducer from 'reducers/preferences';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
  form: formReducer,
  athlete: athleteReducer,
  chart: chartReducer,
  activities: activityReducer,
  preferences: preferencesReducer
});
