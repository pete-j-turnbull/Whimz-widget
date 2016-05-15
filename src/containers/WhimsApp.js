import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import * as WhimsActions from '../actions/actions';

class WhimsApp extends Component {
    render () {
        const { question, actions } = this.props;
        const componentStyle = {
            'box-shadow': '-10px 10px 36px -17px rgba(0, 0, 0, 0.75)',
            'background-color': '#f2f2f2',
            'max-width': '70%',
            'min-height': '60%',
            'margin': '10vh auto 0',
            'padding': '40px'
        };
 
        return (
            <div style={componentStyle}>
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
