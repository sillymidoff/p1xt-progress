import React from 'react';
import HeroUnit from '../HeroUnit/HeroUnit';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

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
