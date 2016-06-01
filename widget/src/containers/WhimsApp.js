import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import * as WhimsActions from '../actions/actions';


class WhimsApp extends Component {
    render () {
        const { loadingQuiz, loadingQuestion, activeQuestionId, questions, userId, ...actions } = this.props;
        return (
            <div id="typeform">
                <div className="form" style={{display: 'block'}}>

                    <MainSection loadingQuiz={loadingQuiz} loadingQuestion={loadingQuestion} activeQuestionId={activeQuestionId} questions={questions} userId={userId} actions={actions} />

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(WhimsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WhimsApp);
