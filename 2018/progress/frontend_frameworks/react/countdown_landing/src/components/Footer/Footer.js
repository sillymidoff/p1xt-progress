import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <div className="Footer">
      <div className="Footer__content container">
        <p>Created by P1xt - inspired by <a href="http://www.free-css.com/free-css-templates/page221/orly">Designsub</a>
        </p>
        <p className="Footer__icons">
          <a href="https://github.com/P1xt">
            <img src="assets/icons/github.svg" alt="Github" />
          </a>
          <a href="https://twitter.com/P1xt">
            <img src="assets/icons/twitter.svg" alt="Github" />
          </a>
        </p>
      </div>
    </div>
  );

}

export default Footer;
