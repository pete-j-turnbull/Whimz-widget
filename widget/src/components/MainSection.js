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

    renderQuestion = (question, handleQuestion) => {
        var props = {
            key: question.id,
            question: question,
            handleQuestion
        };
        props.active = this.props.activeQuestionId == question.id;

        if (question.type == 'multiple-choice') {
            return (<MultipleChoice {...props} />);
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
        const { loadingQuiz, loadingQuestion, answeredQuestions, questions, userId, actions } = this.props;
        const qs = loadingQuiz ? '' : questions.map((question) => this.renderQuestion(question,
            (...args) => actions.nextQuestion(userId, answeredQuestions, ...args) ));

        const submitButton = (answeredQuestions.length >= 3) ?
            (<div className="submit-wrapper flex-double"><div className="button-wrapper submit flex-container flex-center"><span>PLEASE NO MORE!</span></div></div>)
            : '';

        return (
            <div>
                <ul className="questions">
                    {qs}
                </ul>
                
                <div className="flex-container flex-center buttons-wrapper">
                    <div className="flex-container flex-column">
                        <div className="flex-container">
                            <div className="continue-wrapper"><div className="button-wrapper flex-container flex-center" onClick={() => actions.nextQuestion(userId, answeredQuestions, this.props.activeQuestionId, null) }><span>SKIP</span></div></div>
                            <div className="continue-wrapper"><div className="button-wrapper flex-container flex-center" onClick={actions.startOver}><span>START OVER</span></div></div>
                        </div>
                        {submitButton}
                    </div>
                </div>
                
            </div>

        );
    }
};
