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
        const componentStyle = {
            'display': 'flex'
        };
        const questionWrapperStyle = {
            'flex': '5',
            'margin-left': '30px'
        };
        const sidebarWrapperStyle = {
            'flex': '3'
        };
       
        return (
            <div style={componentStyle}>
                <div>
                    <Header />
                </div>
                <div style={questionWrapperStyle}>
                    <Question question={question} handleSubmit={actions.answerQuestion} handleSkip={actions.skipQuestion} />
                </div>
                <div style={sidebarWrapperStyle}>
                    <Sidebar />
                </div>
            </div>
        );
    }
};
