import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Question from './Question';
import Sidebar from './Sidebar';

export default class MainSection extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor (props, context) {
        super(props, context);
        this.state = { };
    }

    render () {
        const { question, actions } = this.props;
        return (
            <div>
                <Header />
                <Question question={question} handleSubmit={actions.answerQuestion} handleSkip={actions.skipQuestion} />
                <Sidebar />
            </div>
        );
    }
};
