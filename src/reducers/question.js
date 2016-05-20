import * as types from '../constants/ActionTypes';

const questions = [
    {
        id: 0,
        type: 'multiple-choice-with-text',
        question: 'What can we help you with?',
        answers: [{id: 0, answer: 'Explore'}, {id: 1, answer: 'Match'}, {id: 2, answer: 'Apply'}]
    },
    {
        id: 1,
        type: 'multiple-choice',
        question: 'More question shit',
        answers: [{id: 0, answer: '123123'}, {id: 1, answer: '123123'}, {id: 2, answer: '123123'}]
    },
    {
        id: 2,
        type: 'multiple-choice',
        question: 'More question shit 2',
        answers: [{id: 0, answer: '123123'}, {id: 1, answer: '123123'}, {id: 2, answer: '123123'}]
    },
    {
        id: 3,
        type: 'multiple-choice',
        question: 'More question shit 3',
        answers: [{id: 0, answer: '123123'}, {id: 1, answer: '123123'}, {id: 2, answer: '123123'}]
    },
];

const initialState = questions[0];

export default function question (state = initialState, action) {
    switch (action.type) {
        case types.ANSWER_QUESTION:
            if (state.id == 0) {
                return questions[1];
            } else if (state.id == 1) {
                return questions[2];
            } else if (state.id == 2) {
                return questions[3];
            } else {
                return questions[0]
            }
        case types.SKIP_QUESTION:
            return state;
        default:
            return state;
    }
};
