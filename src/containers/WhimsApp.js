import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as WhimsActions from '../actions/actions';


class WhimsApp extends Component {
    render () {
        const { loadingQuestion, question, userId, ...actions } = this.props;
 
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="content col-lg-8 col-lg-offset-2">
                        <MainSection loadingQuestion={loadingQuestion} question={question} userId={userId} actions={actions} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(WhimsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WhimsApp);
