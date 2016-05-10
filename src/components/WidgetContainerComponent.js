import React from 'react';
import ReactDOM from 'react-dom';
import styles from './WidgetContainer.scss';
import ToggleButton from './ToggleButtonComponent';

class WidgetContainerComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        let state = {
            COLLAPSED: styles.collapsed,
            EXPANDED: styles.expanded
        }[this.props.toggleState];

        return (
            <div className={state}>
                <ToggleButton />
                <div className={styles.body}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

WidgetContainerComponent.displayName = 'WidgetContainerComponent';

export default WidgetContainerComponent;
