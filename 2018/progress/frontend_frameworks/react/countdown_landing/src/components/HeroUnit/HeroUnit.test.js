import React from 'react';
import ReactDOM from 'react-dom';
import HeroUnit from './HeroUnit';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroUnit />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders correctly', () => {
  const tree = renderer
    .create(<HeroUnit />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
