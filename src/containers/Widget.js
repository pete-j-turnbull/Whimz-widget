import React from 'react';
import {toggleWidget} from '../actions/actions';
import WidgetContainer from 'components/WidgetContainerComponent';

class Widget extends React.Component {
    render () {
        const {dispatch, collapseState} = this.props;
        return (
            <WidgetContainer>
                
            </WidgetContainer>
        );
    }
}

Widget.displayName = 'Widget';

export default Widget;
