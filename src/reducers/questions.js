import * as types from '../constants/ActionTypes';

const initialState1 = {
    current: {
        questionId: 1,
        question: 'This is the first question..',
        possibleAnswers: [
            {answerId: 1, answer: 'A1'},
            {answerId: 2, answer: 'A2'}
        ]
    },
    questions: []
};

const initialState = {
    questionId: 1,
    question: 'This is the first question..',
    possibleAnswers: [
        {answerId: 1, answer: 'A1'},
        {answerId: 2, answer: 'A2'}
    ]
};

export default function current (state = initialState, action) {
    switch (action.type) {
        case types.ANSWER_QUESTION:
            return state;
        default:
            return state;
    }
};
