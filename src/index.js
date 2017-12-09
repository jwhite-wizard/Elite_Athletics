import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
// import GoogleSearch from 'google-search';
const API_KEY = 'AIzaSyAXP_vdckTWNja0brFi5XcugpyVJO_KPUE';

// GoogleSearch({key: API_KEY, term: 'cool shirts'}, function(response)){
//     console.log(response);
// };

// We want to create a new component that produces
// some html
const App = () => {
    return (
        <div>
            /*Eventually it would be nice to have a custom search bar, but we need to
                have a database of shirts that we can search by item id or some sort of
                tag system.
             */
        </div>
        );
}

// Take this component's generated html and put it on the page
// in the DOM.
//We have to use ReactDOM in order to render something to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));