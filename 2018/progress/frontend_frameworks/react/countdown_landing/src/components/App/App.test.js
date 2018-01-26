import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import HeroUnit from '../HeroUnit';
import Content from '../Content';
import Footer from '../Footer';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders HeroUnit', () => {
    expect(wrapper.find(HeroUnit).length).toBe(1);
  });

  it('renders Content', () => {
    expect(wrapper.find(Content).length).toBe(1);
  });

  it('renders Footer', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });
});

