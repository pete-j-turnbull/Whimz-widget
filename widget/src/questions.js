import objectAssign from 'object-assign';
import { updateQuestionArray, getBestQuestion } from './_matrices';
import allQs from './_allQuestions';

var userState = { questions: [] };

function lookupQuestionById (questionId) {
    for (var i=0; i < allQs.length; i++) {
        if (allQs[i].id == questionId) {
            return allQs[i];
        }
    }
}

function nextQuestion (userId, questionId, skipped, answerId) {

	return new Promise(function (resolve, reject) {

        console.log('Fetching next question...');
        console.log('questionId: ' + questionId + ', answerId: ' + answerId);

        // Update local user state
        if (skipped) {
            //userState = objectAssign({}, userState, { questions: userState.questions.concat([{ questionId: questionId, skipped: true }]) });
            updateQuestionArray(questionId, null);
        } else {
            //userState = objectAssign({}, userState, { questions: userState.questions.concat([{ questionId: questionId, skipped: false, answerId: answerId }]) });
            updateQuestionArray(questionId, answerId);
		}

        // Calculate next question

        // Fire a message to server to store user state there
        // console.log(userState);


        var bestId = getBestQuestion();
        console.log('Best id: ');
        console.log(bestId);

        var newQ = lookupQuestionById( bestId );
        console.log('New Q: ');
        console.log(newQ);

        resolve(newQ);

	});
}

module.exports.nextQuestion = nextQuestion;


