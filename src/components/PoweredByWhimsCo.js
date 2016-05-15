import React, { Component } from 'react';

export default class PoweredByWhimsCo extends Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        const aStyle = {
            textDecoration: 'none',
            color: 'black'
        };
        return (
            <div>
                Powered by 
                <a style={aStyle} href="http://poweredby.whims.co" target="_blank" title="Powered by Whims.co"> Whims.co</a>
            </div>
        );
    }
};
