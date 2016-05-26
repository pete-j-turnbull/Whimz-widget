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
    activeQuestionId: '0',
    userId: '10',
    questions: [{
        question: 'Synetiq is a cutting-edge neuromarketing media research start-up, providing content producers with emotional insights directly from their customers’ brain and body. Leveraging recent developments in wearable bio-sensor technology we work hard to understand how people feel when they see an advertisement, TV show or movie. We use this information to help our customers create more engaging videos and reach their goals.',
        type: 'paragraph',
        id: '0'
    }]
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
