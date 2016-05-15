import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import * as WhimsActions from '../actions/actions';

class WhimsApp extends Component {
    render () {
        const { question, actions } = this.props;

        return (
            <div>
                <MainSection question={question} actions={actions} />
                <Footer />
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
