import React from 'react';
import ReactDOM from 'react-dom';
import { RegisterButton } from './RegisterButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RegisterButton
      form={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      setResponse={() => console.log('get response')}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
