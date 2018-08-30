import React from 'react';
import ReactDom from 'react-dom';
import {
    shallow,
    mount
} from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import Root from '../../root';
import {
    CommentList
} from 'components/CommentList';


let component;

beforeEach(() => {
    component = mount( 
        <Root>
            < CommentBox / > 
        </Root>
    );
})

it('it has a text area and button', () => {
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(1);

})


afterEach(() => {
    component.unmount();
})


describe('text area', () => {
    
    it('it has a text area users can type in', () => {

        component.find('textarea').simulate('change', () => {
            target : { value : 'new comment'}
        });

        component.update();

        expect(component.find('textarea').prop('value')).toEqual('new comment');
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');

    })

    it('when form is submitted text area is cleared', () => {

        component.find('textarea').simulate('change', () => {
            target : { value : 'new comment'}
        });

        component.update();
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');

    })

});