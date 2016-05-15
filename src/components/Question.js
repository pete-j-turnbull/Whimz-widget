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

    render () {
        const { question, handleSubmit, handleSkip } = this.props;
        return (
            <div>
                {question.question}
                <ul>
                    {question.answers.map((a, i) => <li key={a.id} onClick={() => ::this.selectAnswer(a.id)}>{a.answer}</li>)}
                </ul>

                <input type="button" value="Submit" onClick={() => handleSubmit(question.id, this.state.selectedAnswer)} />
                <input type="button" value="Skip" onClick={() => handleSkip(question.id)} />
            </div>
        );
    }
};
