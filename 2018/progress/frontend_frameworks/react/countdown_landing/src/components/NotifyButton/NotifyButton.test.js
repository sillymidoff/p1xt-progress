import React from 'react';
import ReactDOM from 'react-dom';
import NotifyButton from './NotifyButton';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotifyButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders correctly', () => {
  const tree = renderer
    .create(<NotifyButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
