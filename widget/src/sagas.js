import { take, takeLatest, fork } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

function _answerQuestion (userId, questionId, answerId) {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:8080/answerQuestion?userId=' + userId + '&questionId=' + questionId + '&answerId=' + answerId).then(res => res.json())
            .then(json => { resolve(json); });
    });
}
function* answerQuestion (action) {
    yield put({ type: 'FETCHING_NEXT_QUESTION' });
    const question = yield call(_answerQuestion, ...action);
    yield put({ type: 'FETCHED_NEXT_QUESTION', payload: question });
}

function _skipQuestion (userId, questionId) {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:3005/skipQuestion?userId=' + userId + '&questionId=' + questionId).then(res => res.json())
            .then(json => { resolve(json); });
    });
}
function* skipQuestion (action) {
    yield put({ type: 'FETCHING_NEXT_QUESTION' });
    const question = yield call(_skipQuestion, ...action);
    yield put({ type: 'FETCHED_NEXT_QUESTION', payload: question });
}

export function* watchSkips () {
    yield* takeLatest('SKIP_QUESTION', skipQuestion);
}
export function* watchAnswers () {
    yield* takeLatest('ANSWER_QUESTION', answerQuestion);
}

export default function* rootSaga () {
    yield [
        watchSkips(),
        watchAnswers()
    ];
}
