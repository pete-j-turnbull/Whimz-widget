import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as WhimsActions from '../actions/actions';


class WhimsApp extends Component {
    render () {
        const { question, actions } = this.props;
 
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 header">
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="content col-lg-8 col-lg-offset-2">
                        <MainSection question={question} actions={actions} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 footer">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        question: state.question
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(WhimsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhimsApp);
