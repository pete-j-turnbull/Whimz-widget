import objectAssign from 'object-assign';
import { updateQuestionArray, getBestQuestion } from './matrices';
import allQs from './allQuestions';

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

        //resolve(allQuestions[userState.questions.length - 1]);


        var bestId = getBestQuestion();
        var newQ = lookupQuestionById( bestId );

        console.log('Best id: ' + bestId);
        console.log('New Q: ' + newQ);

        resolve(newQ);

	});
}

module.exports.nextQuestion = nextQuestion;


