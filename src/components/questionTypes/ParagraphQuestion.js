import React, { Component, PropTypes } from 'react';
import KeyHandler, {KEYPRESS} from 'react-key-handler';

export default class ParagraphQuestion extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        active: PropTypes.bool.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    render () {
        const { question, active, handleSubmit } = this.props;
        const liCName = 'statement active visible ' + (active ? 'focus': '');
        const keyHandlers = active ? (<KeyHandler keyEventName={KEYPRESS} keyValue="Enter" onKeyHandle={() => handleSubmit(question.id, 0)} />) : null;

        return (

            <li className={liCName} id={question.id}>
                {keyHandlers}

                <div className="wrapper" style={{height: '100vh', paddingTop: '25vh'}}>
                    <div className="item">“</div>
                    <div className="question">
                        <span>{question.question}</span>
                    </div>
                    <div className="content">
                        <div className="content-wrapper">
                            <div className="attachment-wrapper">
                                <div className="clear">
                                </div>
                            </div>

                            <div className="button-wrapper continue" onClick={() => handleSubmit(question.id, 0)}>
                                <div className="button nav enabled">
                                    <span>Sounds cool.</span>
                                </div>
                            </div>
                            <div className="text">press <strong>ENTER</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
};
