import React from 'react';
import ReactDOM from 'react-dom';
import {NotConnectedPage} from './NotConnectedPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotConnectedPage />, div);
  ReactDOM.unmountComponentAtNode(div);
})