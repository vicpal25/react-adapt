import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './root';
import App from 'components/App';
import 'foundation-sites/dist/css/foundation.min.css';


ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
