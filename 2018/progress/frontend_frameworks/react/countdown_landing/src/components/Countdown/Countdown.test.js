import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './Countdown';
import renderer from 'react-test-renderer';

describe('<Countdown />', () => {
  const wrapper = shallow(<Countdown />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Countdown />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Countdown />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
