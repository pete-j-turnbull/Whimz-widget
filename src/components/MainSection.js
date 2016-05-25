import React, { Component, PropTypes } from 'react';
import MultipleChoice from './questionTypes/MultipleChoice';
import MultipleChoiceWithText from './questionTypes/MultipleChoiceWithText';
import TextOnly from './questionTypes/TextOnly';
import Transition from 'react-motion-ui-pack';
import Motion, { spring } from 'react-motion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

export default class MainSection extends Component {
    static propTypes = {
        loadingQuestion: PropTypes.bool.isRequired,
        question: PropTypes.object.isRequired,
        userId: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired
    };

    renderQuestion = (loadingQuestion, question, answerQuestion, skipQuestion) => {
        if (!loadingQuestion) {
            if (question.type == 'multiple-choice') {
                return (<MultipleChoice key={question.id} question={question} handleSubmit={answerQuestion} handleSkip={skipQuestion} />);
            } else if (question.type == 'multiple-choice-with-text') {
                return (<MultipleChoiceWithText key={question.id} question={question} handleSubmit={answerQuestion} handleSkip={skipQuestion} />);
            } else if (question.type == 'text-only') {
                return (<TextOnly key={question.id} question={question} handleSubmit={answerQuestion} handleSkip={skipQuestion} />);
            } else {
                return null;
            }
        }
    };

    render () {
        const { loadingQuestion, question, userId, actions } = this.props;
        console.log(this.props);
        return (
            //<ReactCSSTransitionGroup transitionName="question" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            <div>
                {this.renderQuestion(loadingQuestion, question, (...args) => actions.answerQuestion(userId, ...args), (...args) => actions.skipQuestion(userId, ...args))}
            </div>
            //</ReactCSSTransitionGroup>
        );
    }
};
