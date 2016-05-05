import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));