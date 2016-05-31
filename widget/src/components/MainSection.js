import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MultipleChoice from './questionTypes/MultipleChoice';
import MultipleChoiceWithText from './questionTypes/MultipleChoiceWithText';
import TextOnly from './questionTypes/TextOnly';
import ParagraphQuestion from './questionTypes/ParagraphQuestion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MainSection extends Component {
    static propTypes = {
        loadingQuestion: PropTypes.bool.isRequired,
        question: PropTypes.object.isRequired,
        userId: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired
    };

    renderQuestion = (question, answerQuestion, skipQuestion) => {
        var props = {
            key: question.id,
            question: question,
            handleSubmit: answerQuestion,
            handleSkip: skipQuestion
        };

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


    render () {
        const { loadingQuestion, question, userId, actions } = this.props;

        const q = this.renderQuestion(question, (...args) => actions.answerQuestion(userId, ...args), (...args) => actions.skipQuestion(userId, ...args));
        return (
            <ul className="questions">
                <ReactCSSTransitionGroup
                    transitionName="question"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >
                    {q}
                </ReactCSSTransitionGroup>
            </ul>
        );
    }
};
