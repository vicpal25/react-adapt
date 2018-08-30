import React from 'react';
import ReactDom from 'react-dom';
import {
    shallow,
    mount
} from 'enzyme';

// import App from '../App';
// import CommentBox from 'components/CommentBox';
import Root from '../../root';
import {
    CommentList
} from 'components/CommentList';


let component;

beforeEach(() => {

    const initialState = {
        comments: [ 'Comment 1', 'Comment 2' ]
    }

    component = mount( 
        <Root initialState={initialState}>
            <CommentList /> 
        </Root>
    );
})


// it('creates one LI per comment', () => {

//     expect(component.find('li').length).toEqual(2);
    
// });


// afterEach(() => {
//     component.unmount();
// })


