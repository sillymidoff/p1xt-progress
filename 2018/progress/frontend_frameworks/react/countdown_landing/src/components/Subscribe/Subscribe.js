import React from 'react';
import './Subscribe.css';

function Subscribe(props) {
  return (
    <div className="Subscribe">
      <div className="Subscribe__content container">
        <h1>Subscribe Now</h1>
        <input type="text" placeholder="Not collecting emails, demo only" />
        <button>Notify Me</button>
      </div>
    </div>
  );
}

export default Subscribe;
