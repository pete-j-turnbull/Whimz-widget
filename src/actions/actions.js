import * as types from '../constants/ActionTypes';

export const answerQuestion = (questionId, answerId) => {
	return {
		type: types.ANSWER_QUESTION,
                questionId,
		answerId
	};
}

export const skipQuestion = (questionId) => {
    return {
        type: types.SKIP_QUESTION,
        questionId
    }
}
