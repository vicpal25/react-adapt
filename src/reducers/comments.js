import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [action.payload, ...state];
    case FETCH_COMMENTS:
      // map over all comments and return just the name value into an array
      const comments = action.payload.data.map(comment => comment.name);
      return [...comments, ...state];
    default:
      return state;
  }
}