import React from 'react';
import ReactDOM from 'react-dom';
import NotifyButton from './NotifyButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotifyButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});