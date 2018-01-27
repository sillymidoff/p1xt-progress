import React from 'react';
import './Content.css';

function Content(props) {
    return (<div className="Content container"> <div className="Content__banner"> <h1>A landing page template featuring a countdown to launch.</h1> </div> <div className="Content__details"> <h2>Developed using React</h2> <div className="Content__notes"><p>Demo project created by <a href="https://github.com/P1xt">P1xt</a> as part of exploring the React ecosystem.</p><p>Features: React 16, Jest, Enzyme, plain CSS (no Bootstrap or other libraries), pure JavaScript countdown component controlled by React state (no jQuery or 3rd party library, no Redux).</p> <p>Kitten image from <a href="http://placekitten.com/attribution.html">placekitten.com</a></p> <p>Original image by <a href="https://www.flickr.com/photos/titrans/">quatre mains</a></p> </div> </div> </div>);
}

export default Content;
