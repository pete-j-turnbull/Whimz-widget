import React, { Component, PropTypes } from 'react';
import KeyHandler, {KEYPRESS} from 'react-key-handler';

export default class ParagraphQuestion extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    render () {
        const { question, handleSubmit } = this.props;
        const liCName = 'statement active visible focus';
        const keyHandlers = (<KeyHandler keyEventName={KEYPRESS} keyValue="Enter" onKeyHandle={() => handleSubmit(question.id, 0)} />);

        return (

            <li className={liCName} id={question.id}>
                {keyHandlers}

                <div className="wrapper" style={{height: '100vh', paddingTop: '25vh'}}>
                    <div className="item" style={{position: 'relative'}}>“</div>
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
