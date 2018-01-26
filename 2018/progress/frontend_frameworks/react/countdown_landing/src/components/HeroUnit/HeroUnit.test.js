import React from 'react';
import ReactDOM from 'react-dom';
import HeroUnit from './HeroUnit';
import renderer from 'react-test-renderer';
import Logo from '../Logo';
import Countdown from '../Countdown';
import NotifyButton from '../NotifyButton';

describe('<HeroUnit />', () => {
  const wrapper = shallow(<HeroUnit />);
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
  it('renders Logo', () => {
    expect(wrapper.find(Logo).length).toBe(1);
  });

  it('renders Countdown', () => {
    expect(wrapper.find(Countdown).length).toBe(1);
  });

  it('renders NotifyButton', () => {
    expect(wrapper.find(NotifyButton).length).toBe(1);
  });
});
