import React from 'react';
import HeroUnit from '../HeroUnit';
import Content from '../Content';
import Footer from '../Footer';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <HeroUnit />
      <Content />
      <Footer />
    </div>
  );

}

export default App;
