var moduleDict = {
    aim: 3,
    purpose: 2,
    personality: 5
};

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


// Block an entire module (module name, answerId)
// answerUpdate (answerId, blockedModules)
// Add question (module name)


var ruleMatrices = {
    aim: 
    [
        [ 0.9, 0.5, 0.8, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ]
    ],
    purpose: 
    [
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ]
    ],
    personality: 
    [
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ],
        [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ]
    ],
};

function _add (a, b) { return a.map(function (v, i) { return v + b[i]; }) }
function _setColZero(matrix, col) {
    var newMatrix = matrix;
    for (var i = 0; i < matrix.length; i++) {
        newMatrix[i][col] = 0;
    }
    return newMatrix;
}

module.exports.updateQuestionArray = function (questionId, answerId) {

    var mod_id = questionId.split(':');
    var mod = mod_id[0];
    var id = mod_id[1];

    ruleMatrices[mod] = _setColZero(ruleMatrices[mod], id);
    if (answerId != null) {
        questionArrays[mod] = _add(questionArrays[mod], ruleMatrices[mod][answerId]);
    }
}
module.exports.getBestQuestion = function () {
    if (questionCounter >= moduleDict[currentModule]) {
        questionCounter = 0;
        currentModule = Object.keys(moduleDict)[ Object.keys(moduleDict).indexOf(currentModule) + 1 ];
        console.log(currentModule);
    } else {
        questionCounter += 1;
    }
    var maxV = 0;
    var index = 0;
    questionArrays[currentModule].map(function (v, i) { if (v > maxV) { index = i; maxV = v; } });

    return currentModule + ':' + index;
}

