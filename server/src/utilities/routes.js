var jobHandler = require('./jobHandler');
//var questions = require('./questions');

function *quizStart () {

    //var response = yield jobHandler.invoke('startQuiz');
    var response = { userId: '0',
                     question: {
                       id: 'aim:0',
                       type: 'paragraph',
                       question: 'Hey there, could we ask you a few simple questions?'
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

