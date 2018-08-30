import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import { CommentList } from 'components/CommentList';


let component;

beforeEach(()=> {
    component = shallow(<App/>);
})

it('it shows a comment box', () => {
    expect(component.find(CommentBox).length).toEqual(1);
})

it('it shows a comment list', () => {
    //expect(component.find(CommentList).length).toEqual(1);
})

// it('it shows a comment box', () => {
//     const div = document.createElement('div');

//     ReactDom.render(<App/>, div);

//     expect(div.innerHTML).toContain("Comments Box");
    
//     ReactDom.unmountComponentAtNode(div);
   
// })