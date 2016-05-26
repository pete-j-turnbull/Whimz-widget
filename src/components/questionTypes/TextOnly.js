import React, { Component, PropTypes } from 'react';

export default class TextOnly extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleSkip: PropTypes.func.isRequired
    }

    render () {
        const { question, handleSubmit, handleSkip } = this.props;

        return (
            <li className="textfield required active visible ready focus" id={question.id}>
                <div className="wrapper" style={{height: '100vh', paddingTop: '25vh'}}>
                    <div className="item">
                        <span>Q</span>
                        <div className="arrow">
                            <div className="arrow-right">
                            </div>
                        </div>
                    </div>
                    <div className="question"><span>{question.question}</span></div>
                    <div className="content">
                        <div className="description">
                        </div>
                        <div className="content-wrapper">
                            <div className="attachment-wrapper">
                                <div className="control">
                                    <div className="input">
                                        <input className="" type="text" autocomplete="off" />
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="clear"></div>
                            <div className="message "><span></span>
                                <div></div>
                            </div>

                            <div className="confirm container step2">

                                <div className="button-wrapper confirm">
                                    <div className="button nav enabled" onClick={() => handleSubmit(question.id, 0)}><span>Ok</span></div>
                                </div>
                                <div className="text">press <strong>ENTER</strong></div>
                                <div className="aux no-hover">
                                    <div className="inset"></div>
                                    <div className="bg"></div>
                                    <div className="bd"></div>
                                    <div className="overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
};
