import React from 'react';
import ReactDOM from 'react-dom';
import { ProfilIconMenu } from './ProfilIconMenu';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfilIconMenu popoverContent={<div></div>} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
