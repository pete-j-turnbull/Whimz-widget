import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainSection from '../components/MainSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as WhimsActions from '../actions/actions';


class WhimsApp extends Component {
    render () {
        const { question, actions } = this.props;
 
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="container-fluid">

                    <div className="row">
                        <div className="content col-lg-8 col-lg-offset-2">
                            <MainSection question={question} actions={actions} />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
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
