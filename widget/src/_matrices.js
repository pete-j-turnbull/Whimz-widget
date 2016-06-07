import ruleMatrix from './_ruleMatrices';

const nQuestions = 4;

const createArray = (x, n) => (Array.apply(null, Array(n)).map(a => x));
const _add = (a, b) => a.map((v, i) => v + b[i]);


module.exports.getBestQuestion = function (answeredQuestions) {
    var qArray = createArray(0.5, nQuestions);;

    for (var i = 0; i < answeredQuestions.length; i++) {
        var qa = answeredQuestions[i];
        var qId = qa.questionId;
        var aId = qa.answerId;

        qArray[qId] -= 1000;

        if (aId != null) qArray = _add(qArray, ruleMatrix[aId]);
    }

    var maxV = 0;
    var index = 0;
    qArray.map(function (v, i) { if (v > maxV) { index = i; maxV = v; } });

    return index;
}

