import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const enhancer = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const store = {
        ...createStore(rootReducer, initialState, compose(applyMiddleware(createLogger(), sagaMiddleware), enhancer)),
        runSaga: sagaMiddleware.run
    }

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }

    return store;
}
