import { WEEKLY_PROGRESS } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case WEEKLY_PROGRESS:
      const week = ['M', 'T', 'W', 'T', 'F', 'S', 'F'];
      return [...state, week];
    default:
      return state;
  }
}
