import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()
    return {
        ...createStore(rootReducer, initialState, applyMiddleware(createLogger(), sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }
}
