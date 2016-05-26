import React, { Component, PropTypes } from 'react';

export default class ParagraphQuestion extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    render () {
        const { question, handleSubmit } = this.props;
        const className = "statement active visible focus";

        return (
            <li className={className} id={question.id}>
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
