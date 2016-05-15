import React, { Component } from 'react';
import styles from './PoweredByWhimsCo.scss';

export default class PoweredByWhimsCo extends Component {
    cssClasses = [styles.component];

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <div className={this.cssClasses.join(' ')}>
                Powered by 
                <a href="http://poweredby.whims.co" target="_blank" title="Powered by Whims.co"> Whims.co</a>
            </div>
        );
    }
};
