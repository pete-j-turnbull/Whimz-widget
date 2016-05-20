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
        question: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };
    
    renderQuestion = (question, actions) => {
        if (question.type == 'multiple-choice') {
            return (<MultipleChoice key={question.id} question={question} handleSubmit={actions.answerQuestion} handleSkip={actions.skipQuestion} />);
        } else if (question.type == 'multiple-choice-with-text') {
            return (<MultipleChoiceWithText key={question.id} question={question} handleSubmit={actions.answerQuestion} handleSkip={actions.skipQuestion} />);
        } else if (question.type == 'text-only') {
            return (<TextOnly key={question.id} question={question} handleSubmit={actions.answerQuestion} handleSkip={actions.skipQuestion} />);
        } else {
            return null;
        }
    };

    render () {
        const { question, actions } = this.props;
       
        return (
            <ReactCSSTransitionGroup transitionName="question" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                {this.renderQuestion(question, actions)}
            </ReactCSSTransitionGroup>
        );
    }
};
