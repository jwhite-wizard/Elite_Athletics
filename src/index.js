import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAXP_vdckTWNja0brFi5XcugpyVJO_KPUE';
// We want to create a new component that produces
// some html
const App = () => {
    return <div>Gina's Bomb Shirts</div>;
}

// Take this component's generated html and put it on the page
// in the DOM.
//We have to use ReactDOM in order to render something to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));