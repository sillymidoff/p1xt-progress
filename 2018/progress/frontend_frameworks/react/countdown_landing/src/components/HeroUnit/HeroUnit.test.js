import React from 'react';
import ReactDOM from 'react-dom';
import HeroUnit from './HeroUnit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroUnit />, div);
  ReactDOM.unmountComponentAtNode(div);
});