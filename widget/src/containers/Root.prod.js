import React, { Component } from 'react';
import { Provider } from 'react-redux';
import WhimsApp from './WhimsApp';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <WhimsApp />
            </Provider>
        );
    }
}
