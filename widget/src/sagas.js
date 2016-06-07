import { take, takeLatest, fork } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { nextQuestion } from './questions';

/*function _answerQuestion (userId, questionId, answerId) {
    return new Promise(function (resolve, reject) {
        fetch('/next?userId=' + userId + '&questionId=' + questionId + '&answerId=' + answerId).then(res => res.json())
            .then(json => { resolve(json); });
    });
}*/

/*function _skipQuestion (userId, questionId) {
    return new Promise(function (resolve, reject) {
        fetch('/skip?userId=' + userId + '&questionId=' + questionId).then(res => res.json())
            .then(json => { resolve(json); });
    });
}*/

function* _nextQuestion (getState, action) {
    
    yield put({ type: 'UPDATE_ANSWERED', questionId: action.questionId, answerId: action.answerId });

    yield put({ type: 'FETCHING_NEXT_QUESTION' });

    var state = getState();
    const question = yield call(nextQuestion, state.userId, state.answeredQuestions);

    yield put({ type: 'FETCHED_NEXT_QUESTION', payload: question });
    
}


function _initQuiz () {
    return new Promise(function (resolve, reject) {
        fetch('/start').then(res => res.json())
            .then(json => { resolve(json); });
    });
}
function* initQuiz (action) {
    yield put({ type: 'INITIALIZING_QUIZ' });
    const startState = yield call(_initQuiz, ...action);
    yield put({ type: 'INITIALIZED_QUIZ', payload: startState });
}


export function* watchNexts (getState) {
    yield takeLatest('NEXT_QUESTION', _nextQuestion, getState);
}
export function* watchInit () {
    yield takeLatest('INITIALIZE_QUIZ', initQuiz);
}
export function* watchStartOver () {
    yield takeLatest('START_OVER', initQuiz);
}

export default function* rootSaga (getState) {
    yield [
        watchNexts(getState),
        watchInit(),
        watchStartOver()
    ];
}
