var jobHandler = require('./jobHandler');
//var questions = require('./questions');

function *quizStart () {

    //var response = yield jobHandler.invoke('startQuiz');
    var response = yield jobHandler.invoke('quizStart');
    this.body = JSON.stringify(response);
}

function *quizNext () {

    var response = yield jobHandler.invoke('questionNext');
    this.body = JSON.stringify(response);
}




module.exports.Start = quizStart;
module.exports.Next = quizNext;

