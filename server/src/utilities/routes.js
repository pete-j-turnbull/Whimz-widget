var jobHandler = require('./jobHandler');
//var questions = require('./questions');

function *quizStart () {

    //var response = yield jobHandler.invoke('startQuiz');
    var response = { userId: '0',
                     question: {
                       id: 'ai:0',
                       type: 'multiple-choice',
                       question: "Hey there, By answering a few quick questions you'll get to know yourself and your chances on the jobs market a bit better! I'll take less then 5 minutes, we promise!",
                       answers: [{ id: "0", answer: "Let's go!" },
                                 { id: "1", answer: "Tell me more before I do this."}]
                   }};
    this.body = JSON.stringify(response);
}

function *quizNext () {

    var response = yield jobHandler.invoke('questionNext');
    this.body = JSON.stringify(response);
}

function *quizSkip () {

    var response = yield jobHandler.invoke('questionSkip');

    var params  = this.request.query;
    var response = {
        id: '11',
        type: 'multiple-choice',
        question: 'Do you enjoy working under a project manager?',
        answers: [ { id: '0', answer: 'Usually yes.' },
                   { id: '1', answer: 'No, they are mostly useless.' },
                   { id: '2', answer: 'I never had a project manager.' },
                   { id: '3', answer: 'Other...' }
                 ]
   	 };

	this.body = JSON.stringify(response);
}


module.exports.Start = quizStart;
module.exports.Next = quizNext;
module.exports.Skip = quizSkip;

