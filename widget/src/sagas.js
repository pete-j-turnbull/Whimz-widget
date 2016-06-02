import { take, takeLatest, fork } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { nextQuestion } from './questions';

function _answerQuestion (userId, questionId, answerId) {
    return new Promise(function (resolve, reject) {
        fetch('/next?userId=' + userId + '&questionId=' + questionId + '&answerId=' + answerId).then(res => res.json())
            .then(json => { resolve(json); });
    });
}
function* answerQuestion (action) {
    yield put({ type: 'FETCHING_NEXT_QUESTION' });
    const question = yield call(nextQuestion, action.userId, action.questionId, false, action.answerId);

    //const question = yield call(_answerQuestion, action.userId, action.questionId, action.answerId);
    yield put({ type: 'FETCHED_NEXT_QUESTION', payload: question });
}

function _skipQuestion (userId, questionId) {
    return new Promise(function (resolve, reject) {
        fetch('/skip?userId=' + userId + '&questionId=' + questionId).then(res => res.json())
            .then(json => { resolve(json); });
    });
}
function* skipQuestion (action) {
    yield put({ type: 'FETCHING_NEXT_QUESTION' });

    const question = yield call(nextQuestion, action.userId, action.questionId, true, null);

    //const question = yield call(_skipQuestion, action.userId, action.questionId);
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

export function* watchSkips () {
    yield* takeLatest('SKIP_QUESTION', skipQuestion);
}
export function* watchAnswers () {
    yield* takeLatest('ANSWER_QUESTION', answerQuestion);
}

export function* watchInit () {
    yield takeLatest('INITIALIZE_QUIZ', initQuiz);
}
export function* watchStartOver () {
    yield takeLatest('START_OVER', initQuiz);
}

export default function* rootSaga () {
    yield [
        watchSkips(),
        watchAnswers(),
        watchInit(),
        watchStartOver()
    ];
}
