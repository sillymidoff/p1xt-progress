import React from 'react';
import ReactDOM from 'react-dom';
import Subscribe from './Subscribe';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Subscribe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders correctly', () => {
  const tree = renderer
    .create(<Subscribe />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
