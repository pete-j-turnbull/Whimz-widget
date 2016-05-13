import React, { Component } from 'react';
import { Provider } from 'react-redux';
import WhimsApp from './WhimsApp';
import DevTools from './DevTools';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <WhimsApp />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
