import React from 'react';
import './HeroUnit.css';
import Logo from '../Logo';
import Countdown from '../Countdown';
import NotifyButton from '../NotifyButton';

function HeroUnit(props) {
  return (
    <div className="HeroUnit">
      <div className="HeroUnit__transparency"></div>
      <Logo />
      <Countdown />
      <NotifyButton />
    </div>
  );
}

export default HeroUnit;
