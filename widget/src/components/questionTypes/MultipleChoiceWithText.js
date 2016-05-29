import React, { Component, PropTypes } from 'react';

export default class MultipleChoiceWithText extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleSkip: PropTypes.func.isRequired
    }

    state = {
        notSure: false
    };
    setNotSure = () => {
        this.setState({notSure: true});
    };

    renderAnswerOptions = (question, handleSubmit, handleSkip) => {
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
                        <button type="button" className="btn btn-block" onClick={this.setNotSure}>Not Sure</button>
                    </div>
                </div>
            </div>
        );
    };
    renderNotSureTextbox = () => {
        return this.state.notSure ? 
            (<div className="row text-options">
                <div className="col-lg-12">

                    <div className="form-group form-md-line-input form-md-floating-label">
                        <input type="text" className="form-control text-center" />
                        <label className="text-left">Extra</label>
                        <span className="help-block">Explain yourself ...</span>
                    </div>

                </div>
            </div>)
            : '';
    };

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
                            {this.renderAnswerOptions(question, handleSubmit, handleSkip)}
                            {this.renderNotSureTextbox()}
                        </div>
                    </form>
                </div>

            </div>
        );
    }
};
