import { getBestQuestion } from './_matrices';
import allQs from './_allQuestions';


function lookupQuestionById (questionId) {
    for (var i=0; i < allQs.length; i++) {
        if (allQs[i].id == questionId) {
            return allQs[i];
        }
    }
}

function nextQuestion (userId, answeredQuestions) {

	return new Promise(function (resolve, reject) {

        // Calculate next question

        // Fire a message to server to store user state there
        // console.log(userState);


        var bestId = getBestQuestion(answeredQuestions);
        console.log('Best id: ');
        console.log(bestId);

        var newQ = lookupQuestionById( bestId );
        console.log('New Q: ');
        console.log(newQ);

        resolve(newQ);

	});
}

module.exports.nextQuestion = nextQuestion;


