import React from 'react';
import ReactDOM from 'react-dom';
import { LoginButton } from '..';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LoginButton
      form={{ email: '', password: '' }}
      setResponse={() => {
        console.log('hi');
      }}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
