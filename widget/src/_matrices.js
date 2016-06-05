import ruleMatrix from './_ruleMatrices';


var askedQuestions = [];

var noQuestions = 4;
var questionCounter = 1;

const createArray = (x, n) => (Array.apply(null, Array(n)).map(a => x));
var questionArray = createArray(0.5, noQuestions);


function _add (a, b) { return a.map(function (v, i) { return v + b[i]; }) }


module.exports.updateQuestionArray = function (questionId, answerId) {
    console.log('Updating question array...');
    questionArray[questionId] -= 1000;

    askedQuestions.push(questionId);
    console.log('askedQuestions: ');
    console.log(askedQuestions);

    if (answerId != null) {
        questionArray = _add(questionArray, ruleMatrix[answerId]);
        console.log('questionArray: ');
        console.log(questionArray);
    }

    
}

module.exports.getBestQuestion = function () {

    questionCounter += 1;

    var maxV = 0;
    var index = 0;
    questionArray.map(function (v, i) { if (v > maxV) { index = i; maxV = v; } });

    return index;
}


