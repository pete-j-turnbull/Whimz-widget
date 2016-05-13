import * as types from '../constants/ActionTypes';

export const answerQuestion = (questionId, answerId) => {
	return {
		type: types.ANSWER_QUESTION,
                questionid,
		answerId
	};
}
