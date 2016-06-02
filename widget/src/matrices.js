var moduleDict = [3, 2, 5, 6, 7]; // This is a list of the number of questions to be asked in each module
var questionCounter = 0;
var currentModule = 0;

const nQuestions = 10;
const nAnswers = 0; // TODO


const createArray = (x, n) => (Array.apply(null, Array(n)).map(a => x));


var questionArrays = [
    createArray(0.5, moduleDict[0]),
    createArray(0.5, moduleDict[1]),
    createArray(0.5, moduleDict[2]),
    createArray(0.5, moduleDict[3]),
    createArray(0.5, moduleDict[4])
];


// Block an entire module (module name, answerId)
// answerUpdate (answerId, blockedModules)
// Add question (module name)


var ruleMatrices = [
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
];

function _add (a, b) { return a.map(function (v, i) { return v + b[i]; }) }


module.exports.updateQuestionArray = function (answerId) {
    questionArrays[currentModule] = _add(questionArrays[currentModule], ruleMatrices[currentModule][answerId]);
}
module.exports.getBestQuestion = function () {
    if (questionCounter >= moduleDict[currentModule]) {
        questionCounter = 0;
        currentModule += 1;  
    } else {
        questionCounter += 1;
    }
    var maxV = 0;
    var index = 0;
    questionArrays[currentModule].map(function (v, i) { if (v > maxV) { index = i; maxV = v; } })

    return currentModule + ':' + index;
}

