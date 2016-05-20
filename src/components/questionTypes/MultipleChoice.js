import React, { Component, PropTypes } from 'react';

export default class MultipleChoice extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleSkip: PropTypes.func.isRequired
    }

    constructor (props, context) {
        super(props, context);
    }

    renderAnswerOptions (question, handleSubmit, handleSkip) {
        const answers = question.answers;
        return (
            <div className="answer-options">

                <div className="row">
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-block" onClick={() => handleSubmit(question.id, answers[0].id)}>{answers[0].answer}</button>
                    </div>
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-block" onClick={() => handleSubmit(question.id, answers[1].id)}>{answers[1].answer}</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-block" onClick={() => handleSubmit(question.id, answers[2].id)}>{answers[2].answer}</button>
                    </div>
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-block" onClick={() => handleSkip(question.id)}>Skip</button>
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
                            {::this.renderAnswerOptions(question, handleSubmit, handleSkip)}
                        </div>
                    </form>
                </div>

            </div>
        );
    }
};
