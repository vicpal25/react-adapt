import { FETCH_ACTIVITY } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ACTIVITY:
      const activity = action.payload.data;
      return [...state, activity];
    default:
      return state;
  }
}
