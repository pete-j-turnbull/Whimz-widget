import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

export default function rootReducer (state, action) {
    switch (action.type) {
    	case 'INITIALIZING_QUIZ':
    		return objectAssign({}, state, { loadingQuiz: true, loadingQuestion: true, answeredQuestions: [] });
    	case 'INITIALIZED_QUIZ':
    		return objectAssign({}, state, { loadingQuiz: false,
    			                             loadingQuestion: false,
    										 userId: action.payload.userId,
    										 activeQuestionId: action.payload.questions[0].id,
    										 questions: action.payload.questions
    										});
        case 'UPDATE_ANSWERED':
            return objectAssign({}, state, { answeredQuestions: state.answeredQuestions.concat([{ questionId: action.questionId, answerId: action.answerId }]) });
        case 'FETCHING_NEXT_QUESTION':
            return objectAssign({}, state, { loadingQuestion: true });
        case 'FETCHED_NEXT_QUESTION':
            return objectAssign({}, state, { loadingQuestion: false, activeQuestionId: action.payload.id, 
            	questions: state.questions.concat([action.payload]) });
        default:
            return state;
    }
};

