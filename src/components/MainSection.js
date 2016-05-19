import React, { Component, PropTypes } from 'react';
import Question from './Question';

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


            <div className="main-section">
                <Question question={question} handleSubmit={actions.answerQuestion} handleSkip={actions.skipQuestion} />
            </div>

            

            
        );
    }
};
