import React from 'react';
import ReactDOM from 'react-dom';
import { ProfilPage } from './ProfilPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfilPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
