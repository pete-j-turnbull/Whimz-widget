import React, { Component, PropTypes } from 'react';
import KeyHandler, {KEYPRESS} from 'react-key-handler';

export default class MultipleChoice extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        active: PropTypes.bool.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleSkip: PropTypes.func.isRequired
    }

    renderOptions = () => {

    };

    render () {
        const { question, active, handleSubmit, handleSkip } = this.props;
        const liCName = 'list required multiple active visible ' + (active ? 'focus' : '');
        const keyHandlers = active ? (<div><KeyHandler keyEventName={KEYPRESS} keyValue="a" onKeyHandle={() => handleSubmit(question.id, 0)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="b" onKeyHandle={() => handleSubmit(question.id, 0)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="c" onKeyHandle={() => handleSubmit(question.id, 0)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="d" onKeyHandle={() => handleSubmit(question.id, 0)} /></div>) : null;

        return (
            <li className={liCName} id={question.id}>
                {keyHandlers}

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
                                    <div className="multiple intermitent" style={{opacity: '1'}}></div>
                                        <ul className="columns">
                                

                                            <li className="container step2" onClick={() => handleSubmit(question.id, 0)} style={{width: '385px'}}>
                                                <input type="hidden" name="value" value={question.answers[0].answer} autocomplete="off" />
                                                <div className="letter"><span>A</span></div>
                                                <span className="label">{question.answers[0].answer}</span>
                                                <div className="aux " style={{opacity: '1'}}>
                                                    <div className="inset"></div>
                                                    <div className="bg"></div>
                                                    <div className="bd"></div>
                                                    <div className="overlay"></div>
                                                </div>
                                            </li>

                                
                                            <li className="container step2" onClick={() => handleSubmit(question.id, 0)} style={{width: '385px'}}>
                                                <input type="hidden" name="value" value={question.answers[1].answer} autocomplete="off" />
                                                <div className="letter"><span>B</span></div>
                                                <span className="label">{question.answers[1].answer}</span>
                                                <div className="aux ">
                                                    <div className="inset"></div>
                                                    <div className="bg"></div>
                                                    <div className="bd"></div>
                                                    <div className="overlay"></div>
                                                </div>
                                            </li>

                                
                                        <li className="container step2" onClick={() => handleSubmit(question.id, 0)} style={{width: '385px'}}>
                                            <input type="hidden" name="value" value={question.answers[2].answer} autocomplete="off" />
                                            <div className="letter"><span>C</span></div>
                                            <span className="label">{question.answers[2].answer}</span>
                                            <div className="aux " style={{opacity: '1'}}>
                                                <div className="inset"></div>
                                                <div className="bg"></div>
                                                <div className="bd"></div>
                                                <div className="overlay"></div>
                                            </div>
                                        </li>
                                        

                                        <li className="container step2" onClick={() => handleSubmit(question.id, 0)} style={{width: '385px'}}>
                                            <input type="hidden" name="value" value={question.answers[3].answer} autocomplete="off" />
                                            <div className="letter"><span>C</span></div>
                                            <span className="label">{question.answers[3].answer}</span>
                                            <div className="aux " style={{opacity: '1'}}>
                                                <div className="inset"></div>
                                                <div className="bg"></div>
                                                <div className="bd"></div>
                                                <div className="overlay"></div>
                                            </div>
                                        </li>


                                    </ul>
                                </div>

                                <div className="clear"></div>
                            </div>

                            <div className="clear"></div>
                            <div className="message"><span></span><div></div></div>

                            <div className="confirm container step2" style={{visibility: 'hidden'}}>

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
