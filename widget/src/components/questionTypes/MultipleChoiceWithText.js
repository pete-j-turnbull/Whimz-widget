import React, { Component, PropTypes } from 'react';
import KeyHandler, {KEYPRESS} from 'react-key-handler';

export default class MultipleChoice extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        active: PropTypes.bool.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleSkip: PropTypes.func.isRequired
    }
    state = {
        notSure: false
    }

    renderOptions = (question, handleSubmit) => {
        const keyList = ['A', 'B', 'C', 'D'];
        var lastA = question.answers[question.answers.length-1];
        return (<div>
                    {question.answers.slice(0, question.answers.length-1).map((a, i) => (
                        <li className="container step2" onClick={() => handleSubmit(question.id, a.id)} key={a.id} style={{width: '385px'}}>
                            <input type="hidden" name="value" value={a.answer} autocomplete="off" />
                            <div className="letter"><span>{keyList[i]}</span></div>
                            <span className="label">{a.answer}</span>
                            <div className="aux " style={{opacity: '1'}}>
                                <div className="inset"></div>
                                <div className="bg"></div>
                                <div className="bd"></div>
                                <div className="overlay"></div>
                            </div>
                        </li>
                    ))}

                    {
                        <li className="container step2" onClick={() => { this.state.notSure = true; }} key={lastA.id} style={{width: '385px'}}>
                            <input type="hidden" name="value" value={lastA.answer} autocomplete="off" />
                            <div className="letter"><span>{keyList[question.answers.length-1]}</span></div>
                            <span className="label">{lastA.answer}</span>
                            <div className="aux " style={{opacity: '1'}}>
                                <div className="inset"></div>
                                <div className="bg"></div>
                                <div className="bd"></div>
                                <div className="overlay"></div>
                            </div>
                        </li>
                    }
                </div>);  
    };
    renderNotSureTextbox = () => {
        return this.state.notSure ? 
            (<div className="row text-options">
                <div className="col-lg-12">

                    <div className="form-group form-md-line-input form-md-floating-label">
                        <input type="text" className="form-control text-center" />
                        <label className="text-left">Extra</label>
                        <span className="help-block">Explain yourself ...</span>
                    </div>

                </div>
            </div>)
            : '';
    };
    render () {
        const { question, active, handleSubmit, handleSkip } = this.props;
        const liCName = 'list required multiple active visible ' + (active ? 'focus' : '');
        const keyHandlers = active ? (<div><KeyHandler keyEventName={KEYPRESS} keyValue="a" onKeyHandle={() => handleSubmit(question.id, question.answers[0].id)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="b" onKeyHandle={() => handleSubmit(question.id, question.answers[1].id)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="c" onKeyHandle={() => handleSubmit(question.id, question.answers[2].id)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="d" onKeyHandle={() => handleSubmit(question.id, question.answers[3].id)} /></div>) : null;

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

                                        {this.renderOptions(question, handleSubmit)}

                                    </ul>
                                </div>

                                <div className="clear"></div>
                            </div>

                            <div className="clear"></div>
                            <div className="message"><span></span>
                                <div>
                                </div>
                            </div>

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
                {this.renderNotSureTextbox()}
            </li>
        );
    }
};








