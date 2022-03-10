import React from 'react';
import ReactDOM from 'react-dom';
import {AlertSnackBar} from './AlertSnackBar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlertSnackBar response={{
    open: false,
    message: '',
    error: false,
  }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});