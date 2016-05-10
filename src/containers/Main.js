require('normalize.css');

import React from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from '../store/configureStore';
import Widget from './Widget';

const store = configureStore();

let AppContainer = () => (    
    <Provider store={ store }>
        <Widget />
    </Provider>
);

export default AppContainer;
