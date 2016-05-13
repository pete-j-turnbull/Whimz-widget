import React, { Component, PropTypes } from 'react';

export default class MainSection extends Component {
    static propTypes = {
        current: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = { };
    }

    render () {
        const { current, actions } = this.props;
        return (
            <section className='main'>
                { current.question }
            
            </section>
        );
    }
};
