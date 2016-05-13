import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../components/Sidebar'
import MainSection from '../components/MainSection';
import * as WhimsActions from '../actions/actions';

class WhimsApp extends Component {
    render () {
        const { current, actions } = this.props;

        return (
            <div>
                <MainSection current={current} actions={actions} />
                <Sidebar />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        current: state.current
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(WhimsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhimsApp);
