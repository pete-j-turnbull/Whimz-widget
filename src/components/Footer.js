import React, { Component } from 'react';
import PoweredByWhimsCo from './PoweredByWhimsCo';

export default class Footer extends Component {

    constructor (props, context) {
        super(props, context);
        this.state = { };
    }

    render () {
        const componentStyle = {
            textAlign: 'left',
            paddingTop: '30px',
            fontWeight: '600'
        };

        return (
            <div style={componentStyle}>
                <PoweredByWhimsCo />
            </div>
        );
    }
};
