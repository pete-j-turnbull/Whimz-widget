import ruleMatrices from './ruleMatrices';

var moduleDict = {
    ai: 2,
    ca: 3,
    av: 1,
    st: 3,
    cu: 5,
    pe: 4
};

var askedQuestions = [];

var nAnswers = 0;
ruleMatrices['ai'].map(function (key) { nAnswers = ruleMatrices['ai'].length; });

var questionCounter = 1;
var currentModule = 'ai';

const createArray = (x, n) => (Array.apply(null, Array(n)).map(a => x));
var questionArrays = {
    ai: createArray(0.5, 2),
    ca: createArray(0.5, 3),
    av: createArray(0.5, 1),
    st: createArray(0.5, 3),
    cu: createArray(0.5, 5),
    pe: createArray(0.5, 4),
};


function _add (a, b) { return a.map(function (v, i) { return v + b[i]; }) }
function _setQsZero (array, questionIds) {
    //console.log(questionArrays['ai']);
    var newArray = array;
    for (var i = 0; i < questionIds.length; i++) {
        var mod_id = questionIds[i].split(':');
        if (currentModule == mod_id[0]) {
            newArray[mod_id[1]] = 0;
        }
    }
    return newArray;
}



module.exports.updateQuestionArray = function (questionId, answerId) {
    console.log('Updating question array...');

    askedQuestions.push(questionId);
    console.log(askedQuestions);

    if (answerId != null) {
        var mod_id = questionId.split(':');
        var mod = mod_id[0];
        var id = mod_id[1];
        questionArrays[mod] = _add(questionArrays[mod], ruleMatrices[mod][answerId]);
        console.log('questionArrays: ');
        console.log(questionArrays);

    }
}

module.exports.getBestQuestion = function () {

    if (questionCounter >= moduleDict[currentModule]) {
        questionCounter = 1;
        currentModule = Object.keys(moduleDict)[ Object.keys(moduleDict).indexOf(currentModule) + 1 ];
    } else {
        questionCounter += 1;
    }

    console.log('Setting qArray...');
    var qArray = _setQsZero(questionArrays[currentModule], askedQuestions);
    console.log(qArray);

    var maxV = 0;
    var index = 0;
    qArray.map(function (v, i) { if (v > maxV) { index = i; maxV = v; } });

    return currentModule + ':' + index;
}

