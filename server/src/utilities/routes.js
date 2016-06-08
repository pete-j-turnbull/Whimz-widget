var jobHandler = require('./jobHandler');
//var questions = require('./questions');

function *quizStart () {

    //var response = yield jobHandler.invoke('startQuiz');
    var response = yield jobHandler.invoke('quizStart');
    /*var firstQuestion = { 
		userId: '0',
		question: {
			id: '0',
			type: 'multiple-choice',
			question: "Hey there, By answering a few quick questions you'll get to know yourself and your chances on the jobs market a bit better! I'll take less then 5 minutes, we promise!",
			answers: [{ id: "10", answer: "Let's go!" }, { id: "11", answer: "Tell me more before I do this."}]
		}
	};*/
    this.body = JSON.stringify(response);
}

function *quizNext () {
	var params = this.request.query;
	var userId = params.userId;
	var questionId = params.questionId;
	var answerId = params.answerId;

    var response = yield jobHandler.invoke('questionNext', { userId: userId, questionId: questionId, answerId: answerId });
    this.body = JSON.stringify(response);
}


module.exports.Start = quizStart;
module.exports.Next = quizNext;

