import React, { Component, PropTypes } from 'react';

export default class MultipleChoice extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleSkip: PropTypes.func.isRequired
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
            <li className="list required multiple active visible focus">
                <div className="wrapper" style={{height: '100vh', paddingTop: '25vh'}}>
                    <div className="item">
                        <span>Q</span>
                        <div className="arrow"><div className="arrow-right"></div></div>
                    </div>
                    <div className="question"><span>{question.question}</span></div>
                    <div className="content">
                        <div className="description">
                        </div>
                        <div className="content-wrapper">

                            <div className="attachment-wrapper">
                            
                                <div className="control">
                                    <div className="multiple intermitent" style={{opacity: '1'}}>Choose as many as you like</div>
                                        <ul className="columns">
                                
                                            <li className="container step2 selected" style={{width: '385px'}}>
                                                <input type="hidden" name="value" value="Backend / Data Engineer" autocomplete="off" />
                                                <div className="letter"><span>A</span></div>
                                                <span className="label">Backend / Data Engineer</span>
                                                <div className="aux " style={{opacity: '1'}}>
                                                    <div className="inset"></div>
                                                    <div className="bg"></div>
                                                    <div className="bd"></div>
                                                    <div className="overlay"></div>
                                                </div>
                                            </li>

                                
                                            <li className="container step2" style={{width: '385px'}}>
                                                <input type="hidden" name="value" value="Web Developer" autocomplete="off" />
                                                <div className="letter"><span>B</span></div>
                                                <span className="label">Web Developer</span>
                                                <div className="aux ">
                                                    <div className="inset"></div>
                                                    <div className="bg"></div>
                                                    <div className="bd"></div>
                                                    <div className="overlay"></div>
                                                </div>
                                            </li>

                                
                                        <li className="container step2" style={{width: '385px'}}>
                                            <input type="hidden" name="value" value="Data Scientist" autocomplete="off" />
                                            <div className="letter"><span>C</span></div>
                                            <span className="label">Data Scientist</span>
                                            <div className="aux " style={{opacity: '1'}}>
                                                <div className="inset"></div>
                                                <div className="bg"></div>
                                                <div className="bd"></div>
                                                <div className="overlay"></div>
                                            </div>
                                        </li>
                                        
                                        <li className="custom container step2" style={{width: '385px'}}>
                                            <input type="hidden" name="value" value="!other" autocomplete="off" />
                                            <div className="letter"><span>D</span></div>
                                            <span className="label ellipsis"><span className="val">Other</span></span>
                                            <input className="other-field" type="text" autocomplete="off" />

                                            <div className="button-wrapper ok-confirm">
                                                <div className="button nav tick tick--button enabled"><span></span></div>
                                            </div>
                                        
                                            <span className="tick"></span>
                                            <div className="aux ">
                                                <div className="inset"></div>
                                                <div className="bg"></div>
                                                <div className="bd"></div>
                                                <div className="overlay"></div>
                                            </div>

                                            <div className="clear"></div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="clear"></div>
                            </div>

                            <div className="clear"></div>
                            <div className="message "><span></span><div></div></div>

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
