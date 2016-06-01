var jobHandler = require('./jobHandler');


function *quizStart () {

    var response = yield jobHandler.invoke('quizStart');
    this.body = JSON.stringify(response);
}

function *quizNext () {

	response = yield jobHandler.invoke('questionNext');
    this.body = JSON.stringify(response);
}

function *quizSkip () {

	response = yield jobHandler.invoke('questionSkip');
    this.body = JSON.stringify(response);
}


module.exports.Start = quizStart;
module.exports.Next = quizNext;
module.exports.Skip = quizSkip;

