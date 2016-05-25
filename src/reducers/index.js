import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

export default function rootReducer (state, action) {
    switch (action.type) {
        case 'FETCHING_NEXT_QUESTION':
            return objectAssign({}, state, { loadingQuestion: true });
        case 'FETCHED_NEXT_QUESTION':
            return objectAssign({}, state, { loadingQuestion: false, question: action.payload });
        default:
            return state;
    }
};

