import ruleMatrices from './ruleMatrices';

var moduleDict = {
    aim: 3,
    purpose: 2,
    personality: 5
};

var askedQuestions = [];

var questionCounter = 0;
var currentModule = 'aim';

const nQuestions = 10;
const nAnswers = 0; // TODO


const createArray = (x, n) => (Array.apply(null, Array(n)).map(a => x));


var questionArrays = {
    aim: createArray(0.5, 10),
    purpose: createArray(0.5, 12),
    personality: createArray(0.5, 10)
};

function _add (a, b) { return a.map(function (v, i) { return v + b[i]; }) }
function _setQsZero(array, questionIds) {
    var newArray = array;
    for (var i = 0; i < questionIds.length; i++) {
        newArray[i] = 0;
    }
    return newArray;
}

module.exports.updateQuestionArray = function (questionId, answerId) {
    askedQuestions.push(questionId);
    console.log(askedQuestions);

    if (answerId != null) {
        var mod_id = questionId.split(':');
        var mod = mod_id[0];
        var id = mod_id[1];
        questionArrays[mod] = _add(questionArrays[mod], ruleMatrices[mod][answerId]);
    }

}
module.exports.getBestQuestion = function () {
    var qArray = _setQsZero(questionArrays[currentModule], askedQuestions);
    console.log(qArray);

    if (questionCounter >= moduleDict[currentModule]) {
        questionCounter = 0;
        currentModule = Object.keys(moduleDict)[ Object.keys(moduleDict).indexOf(currentModule) + 1 ];
        console.log(currentModule);
    } else {
        questionCounter += 1;
    }
    var maxV = 0;
    var index = 0;
    qArray.map(function (v, i) { if (v > maxV) { index = i; maxV = v; } });

    return currentModule + ':' + index;
}

