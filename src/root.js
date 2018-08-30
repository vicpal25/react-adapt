import React from 'react';
import ReactDom from 'react-dom';
import {
    Provider
} from 'react-redux';
import {
    createStore,
    applyMiddleware
} from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';


// import App from 'components/App';

// ReactDom.render(
//     <Provider store={ createStore(reducers, {}) }>
//     <App / >
//     </Provider>    
//     , document.querySelector('#root'))

export default ({ children, initialState = {} } ) => {

    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));

    return (

        <Provider store={ store }>
            {children}
        </Provider>    

    );
};