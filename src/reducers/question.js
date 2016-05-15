import * as types from '../constants/ActionTypes';

const questions = [
    {
        id: 0,
        type: 'multiple-choice',
        question: 'What can we help you with?',
        answers: [{id: 0, answer: 'Explore'}, {id: 1, answer: 'Match'}, {id: 2, answer: 'Apply'}]
    },
    {
        id: 1,
        type: 'multiple-choice',
        question: 'More question shit',
        answers: [{id: 0, answer: ''}, {id: 1, answer: ''}]
    }
];

const initialState = questions[0];

export default function question (state = initialState, action) {
    switch (action.type) {
        case types.ANSWER_QUESTION:
            return questions[1];
        case types.SKIP_QUESTION:
            return state;
        default:
            return state;
    }
};
