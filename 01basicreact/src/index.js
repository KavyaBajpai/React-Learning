import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 // even if we remove the strict mode statement, the webpage loads as it is.
 // the strict mode is created specifiacally for developement to allow optimisation.

 // App tag is basically the tag that is created in the app.js file.
 // here react is allowing us to write a function in js that returns an html tag and react renders it in the dom for us.
 // this allows for programming capabilities in html.

 //k
