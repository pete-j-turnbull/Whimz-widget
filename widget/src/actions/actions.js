export const nextQuestion = (userId, answeredQuestions, questionId, answerId) => {
    return {
        type: 'NEXT_QUESTION',
            userId,
            answeredQuestions,
            questionId,
            answerId
    };
}

export const startOver = (userId) => {
    return {
        type: 'START_OVER',
            userId
    };
}