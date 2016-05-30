var jobHandler = require('./jobHandler');


function *quizStart () {

    var response = yield jobHandler.invoke('startQuiz');
    this.body = JSON.stringify(response);
}

function *quizNext () {

	var params   = this.request.query;	
	response = yield jobHandler.invoke('quizNext', params);
    this.body = JSON.stringify(response);
}


module.exports.Start = quizStart;
module.exports.Next = quizNext;

