import React from 'react';
import ReactDOM from 'react-dom';
import {LoginButton} from './LoginButton';


it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginButton form={{email: "", password: ""}} setResponse={() => {console.log("set response")}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});