import { FETCH_ATHLETE, FETCH_ACTIVITIES } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ATHLETE:
      const athlete = action.payload.data;
      return [...state, athlete];
    case FETCH_ACTIVITIES:
      const activities = action.payload.data;
      return [...state, activities];
    default:
      return state;
  }
}
