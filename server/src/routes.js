var jobHandler = require('./utilities/jobHandler');

function *quizStart () {

    var response = yield jobHandler.invoke('quizStart', {});
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
