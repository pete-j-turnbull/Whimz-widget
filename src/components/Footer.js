import React, { Component } from 'react';
import PoweredByWhimsCo from './PoweredByWhimsCo';

export default class Footer extends Component {

    constructor (props, context) {
        super(props, context);
        this.state = { };
    }

    render () {
        return (
            <div>
                <PoweredByWhimsCo />
            </div>
        );
    }
};
