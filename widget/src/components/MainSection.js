import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MultipleChoice from './questionTypes/MultipleChoice';
import MultipleChoiceWithText from './questionTypes/MultipleChoiceWithText';
import TextOnly from './questionTypes/TextOnly';
import ParagraphQuestion from './questionTypes/ParagraphQuestion';
import smoothScroll from 'smoothscroll';
import VelocityComponent from 'velocity-animate';

export default class MainSection extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired
    };

    renderQuestion = (question, answerQuestion, skipQuestion) => {
        var props = {
            key: question.id,
            question: question,
            handleSubmit: answerQuestion,
            handleSkip: skipQuestion
        };
        props.active = this.props.activeQuestionId == question.id;

        if (question.type == 'multiple-choice') {
            return (<MultipleChoice {...props} />);
        } else if (question.type == 'multiple-choice-with-text') {
            return (<MultipleChoiceWithText {...props} />);
        } else if (question.type == 'text-only') {
            return (<TextOnly {...props} />);
        } else if (question.type == 'paragraph') {
            return (<ParagraphQuestion {...props} />);
        } else {
            return null;
        }
    };

    componentDidUpdate = () => {
        var element = document.getElementById(this.props.activeQuestionId);
        if (element) smoothScroll(element);
    };

    render () {
        const { loadingQuiz, loadingQuestion, questions, userId, actions } = this.props;
        const qs = loadingQuiz ? '' : questions.map((question) => this.renderQuestion(question,
            (...args) => actions.answerQuestion(userId, ...args), (...args) => actions.skipQuestion(userId, ...args)));
        return (
            <div>
                <ul className="questions">
                    {qs}
                </ul>
                <div className="buttons-wrapper">
                    <div className="button-wrapper continue" onClick={() => actions.skipQuestion(userId, this.props.activeQuestionId) }><span>Skip</span></div>
                    <div className="button-wrapper continue"><span>Submit</span></div>
                    <div className="button-wrapper continue" onClick={actions.startOver}><span>Start over</span></div>
                </div>
            </div>

        );
    }
};
