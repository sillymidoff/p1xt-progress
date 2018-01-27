import React from 'react';
import HeroUnit from '../HeroUnit';
import Content from '../Content';
import Footer from '../Footer';
import Subscribe from '../Subscribe';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <HeroUnit />
      <Content />
      <Subscribe />
      <Footer />
    </div>
  );

}

export default App;
