import React, { Component, PropTypes } from 'react';
import KeyHandler, {KEYPRESS} from 'react-key-handler';

export default class MultipleChoice extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        active: PropTypes.bool.isRequired,
        handleQuestion: PropTypes.func.isRequired
    }

    renderOptions = (question, handleQuestion) => {
        const keyList = ['A', 'B', 'C', 'D'];
        return (<div>
                    {question.answers.map((a, i) => (
                        <li className="container step2" onClick={() => handleQuestion(question.id, a.id)} key={a.id}>
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
                    ))};
                </div>);  
    };

    render () {
        const { question, active, handleQuestion } = this.props;
        const liCName = 'list required multiple active visible ' + (active ? 'focus' : '');
        const keyHandlers = active ? (<div><KeyHandler keyEventName={KEYPRESS} keyValue="a" onKeyHandle={() => handleQuestion(question.id, question.answers[0].id)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="b" onKeyHandle={() => handleQuestion(question.id, question.answers[1].id)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="c" onKeyHandle={() => handleQuestion(question.id, question.answers[2].id)} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="d" onKeyHandle={() => handleQuestion(question.id, question.answers[3].id)} /></div>) : null;

        return (
            <li className={liCName} id={question.id}>
                {keyHandlers}

                <div className="question-frame-wrapper">
                    <div className="question-container flex-container flex-center">
                        <div className="">
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

                                                { this.renderOptions(question, handleQuestion) }

                                            </ul>
                                        </div>

                                        <div className="clear"></div>
                                    </div>

                                    <div className="clear"></div>
                                    <div className="message"><span></span>
                                        <div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
};
