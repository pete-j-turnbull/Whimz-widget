import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import rootSaga from './sagas';
import configureStore from './store/configureStore';

const initialState = {
    loadingQuestion: false,
    userId: 10,
    question: {
        question: 'Hey there, what can we help you with?',
        type: 'multiple-choice',
        id: 0,
        answers: [
            {id: 0, answer: 'Explore'},
            {id: 1, answer: 'Match'},
            {id: 2, answer: 'Apply'}
        ]
    }
};
const store = configureStore(initialState);
store.runSaga(rootSaga);

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
