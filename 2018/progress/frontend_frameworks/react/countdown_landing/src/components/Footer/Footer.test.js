import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import renderer from 'react-test-renderer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
