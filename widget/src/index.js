import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import rootSaga from './sagas';
import configureStore from './store/configureStore';

const initialState = {};
const store = configureStore(initialState);
store.runSaga(rootSaga, store.getState);
store.dispatch({ type: 'INITIALIZE_QUIZ' });

render(
    <AppContainer>
        <Root store={ store } />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        render(
            <AppContainer
                component={require('./containers/Root').default}
                props={{ store }}
            />,
            document.getElementById('root')
        );
    });
}
