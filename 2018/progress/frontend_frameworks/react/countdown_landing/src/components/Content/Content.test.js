import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import renderer from 'react-test-renderer';
describe('<Content />', () => {
  const wrapper = shallow(<Content />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Content />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
