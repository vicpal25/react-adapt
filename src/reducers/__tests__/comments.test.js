import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';


it('handles actions of SAVE_COMMENT', ()=> {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentReducer([], action);

    expect(newState).toEqual(['New Comment']);

})

it('handles action w/ unkown type', ()=> {


  const newstate =  commentReducer([], {type : 'qwel;jrtlk'});

  expect(newstate).toEqual([]);

  
})