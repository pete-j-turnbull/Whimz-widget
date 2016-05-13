import { connect } from 'react-redux';
import { answerCurrentQuestion } from '../actions/actions';
import Question from '../components/QuestionComponent';

const mapStateToProps = (state) => {
    return {
        question: state.question
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQuestionAnswer: (answerId) => {
            dispatch(answerCurrentQuestion(answerId));
        }
    };
};

const QuestionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);

export default QuestionContainer;
