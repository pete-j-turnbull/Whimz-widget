import React, { Component, PropTypes } from 'react';

export default class Question extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleSkip: PropTypes.func.isRequired
    }

    constructor (props, context) {
        super(props, context);
        this.state = {
            selectedAnswer: 0
        };
    }

    selectAnswer (answerId) {
        this.state.selectedAnswer = answerId;
    }

    renderAnswerOptions (answers) {
        return (
            <div className="answer-options">

                <div className="row">
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-block">{answers[0].answer}</button>
                    </div>
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-block">{answers[1].answer}</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-block">{answers[2].answer}</button>
                    </div>
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-block">{answers[2].answer}</button>
                    </div>
                </div>
            </div>
        );
    }
    renderTextbox () {
        return (
            <div className="row text-options">
                <div className="col-lg-12">

                    <div className="form-group form-md-line-input form-md-floating-label">
                        <input type="text" className="form-control text-center" />
                        <label className="text-left">Extra</label>
                        <span className="help-block">Explain yourself ...</span>
                    </div>

                </div>
            </div>
        );
    }
    render () {
        const { question, handleSubmit, handleSkip } = this.props;

        return (

            <div className="portlet light">

                <div className="portlet-title">
                    <span className="question">{question.question}</span>
                </div>

                <div className="portlet-body form">
                    <form>
                        <div className="form-body">
                            {::this.renderAnswerOptions(question.answers)}
                            {::this.renderTextbox()}
                        </div>
                    </form>
                </div>

            </div>
        );
    }
};
