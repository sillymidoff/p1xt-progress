import React from 'react';
import './HeroUnit.css';
import Logo from '../Logo';
import Countdown from '../Countdown';
import NotifyButton from '../NotifyButton';

function HeroUnit(props) {
  return (
    <div className="HeroUnit">
      <Logo />
      <Countdown />
      <NotifyButton />
    </div>
  );

}

export default HeroUnit;
