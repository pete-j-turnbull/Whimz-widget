export const answerQuestion = (userId, questionId, answerId) => {
    return {
        type: 'ANSWER_QUESTION',
            userId,
            questionId,
            answerId
    };
}

export const skipQuestion = (userId, questionId) => {
    return {
        type: 'SKIP_QUESTION',
            userId,
            questionId
    };
}

export const startOver = (userId) => {
    return {
        type: 'START_OVER',
            userId
    };
}