import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from './Appbar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Appbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});