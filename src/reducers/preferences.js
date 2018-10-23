import { PREFERENCES } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case PREFERENCES:
      return [...state, action.payload.data];
    default:
      return state;
  }
}
